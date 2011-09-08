A simple carousel plugin for jQuery. It was initially created as an example to show how to build a plugin vs doing pure function javascript coding.

It takes any markup similar to:
<div id="slideshow">
	<img src="1.png">
	<img src="2.png">
	<img src="3.png">
</div>

or 

<div id="slideshow">
	<p><img src="1.png"></p>
	<p><img src="2.png"></p>
	<p><img src="3.png"></p>
</div>

Basically any container element with a group of images below it in any number of subcontainers.

----------------------------------------------------------------------------------

To Use:
Include jQuery and then the plugin file (or copy the code into your own file).
$('#slideshow').eddiesCarousel();

If you want to use a fade effect instead of a slide effect:
$('#slideshow').eddiesCarousel({effect:'fadeOut'});

To adjust the delay between pictures changingg (in milliseconds):
$('#slideshow').eddiesCarousel({delay:5000});

To adjust the duration of the animation (in milliseconds):
$('#slideshow').eddiesCarousel({speed:500});

To use multiple options:
$('#slideshow').eddiesCarousel({delay:5000, speed:400, effect: 'fadeOut'});
