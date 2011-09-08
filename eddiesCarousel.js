(function($) {
$.fn.eddiesCarousel = function( options ) {
    var option = $.extend({
			delay: 6000,
			effect: 'slideIn',
			speed: 1000
		}, options),
		iHTML = [],
		images = this.find('img').detach(),
		timer,
		looper = function ( imgs ) {
			$(imgs).last().fadeOut(option.speed, function(){
				var $this = $(this);
				imgs.unshift( imgs.pop() );
				$this.prependTo( $this.parent() ).show();				
				timer = setTimeout(function() { looper(imgs); }, option.delay);
			});
		};

    this
		.height( this.height() )
		.width( this.width() )
		.empty()
		.css({
			position: 'relative',
			overflow: 'hidden'
		});		

	images
		.css({
			position: 'absolute',
			top: 0,
			left: 0
		});

	this.append(images);

	timer = setTimeout(function() { looper( $.makeArray(images) ); }, option.delay);
};
})(jQuery);
