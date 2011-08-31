(function($) {
$.fn.eddiesCarousel = function() {
    var images = this.find('img'),
        height = this.height();

    images.detach();

    this.empty().css('position', 'relative').height( height );
    
    images
        .css({
            zIndex:1,
            position: 'absolute',
            top: 0,
            left: 0
        })
        .first()
            .css('z-index',2)
            .show();
    
    images.first().delay(2000).fadeOut();


    this.append(images);
};

})(jQuery);

$('#gallery-1').eddiesCarousel();
