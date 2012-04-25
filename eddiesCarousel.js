(function($) {
$.fn.eddiesCarousel = function( options ) {
    // Define some defaults for the plugin
    var option = $.extend({
			delay: 6000,
			effect: 'slideUp',
			speed: 1000,
			src: 'image'
		}, options),

		// Get the height and width of the container to limit the size of the pics
		tHeight = this.height(),
		tWidth = this.width(),
		
		// Some empty holders for later
		images,
		timer,

		// The real worker of the plugin
		looper = function ( imgs ) {
			// Check to make sure the effect is a valid hider effect and if so, hide the
			// last image (the visible one)
			$.fn[option.effect] && $(imgs).last()[option.effect](option.speed, function(){
				// Once the image is hidden, rearrange the array so it will work with the
				// new last image
				var $this = $(this);
				imgs.unshift( imgs.pop() );
				$this.prependTo( $this.parent() ).show();				
				// Start the whole thing over again
				timer = setTimeout(function() { looper(imgs); }, option.delay);
			});
		};

	// First figure out what/where the actual images are
	if ( option.src === 'thumbnail' ) {
		// If there are thumbnails inside of anchor tags pointing to the real images
		images = [];
		// Grab the image info, create new image elements and use those
		this.find('img').closest('a').each(function(){
			var elem = document.createElement('img');
			elem.setAttribute('src', this.href);
			elem.setAttribute('alt', this.title);
			images.push( elem );
		});
		images = $(images);
	}
	else {
		// Use the images as they are
		images = this.find('img').detach();
	}

	// Perform some magic on the container, like fix the height and width, empty it
	// and set some css to allow the images to move
	this
		.height( tHeight )
		.width( tWidth )
		.empty()
		.css({
			position: 'relative',
			overflow: 'hidden'
		});		

	// Set some css on the images
	images
		.css({
			position: 'absolute',
			top: 0,
			left: 0,
			width: tWidth+'px',
			height: tHeight+'px'
		});

	// Add the images back to the page
	this.append(images);

	// Set the initial timer, convert the jQuery collection to an array and run it
	timer = setTimeout(function() { looper( $.makeArray(images) ); }, option.delay);
	
	// Return this so it maintains it chainability.
	return this;
};
})(jQuery);
