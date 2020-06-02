/**
 * simpleGallery - jQuery plugin to create a simple fadein gallery
 * @requires jQuery v1.2 or above
 *
 *
 * Copyright (c) 2011 Ben Dry (bendry@adam.com.au)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 * 
 * <div class="simpleGallery" style="height:718px;width:430px"> <-- you must state the width and height inline
 *	<img src="/images/test/rabbit1.jpg" alt="Rabbit 1"/>
 *	<img src="/images/test/rabbit2.jpg" alt="Rabbit 2" />
 *	<img src="/images/test/rabbit3.jpg" alt="Rabbit 3" />
 *	<img src="/images/test/rabbit4.jpg" alt="Rabbit 4" />
 * </div>
 *
 */



(function($) {                                      
	$.fn.simpleGallery = function() {
		 return this.each(function() {  
			obj = $(this);  
		//	jQuery(this).height(jQuery(this).find("img:first").height());
		//	jQuery(this).width(jQuery(this).find("img:first").width());
			var $active = $(this).find('IMG.active');
		    if ( $active.length == 0 ) $active =  $(this).find('IMG:last');
		    var $next =  $active.next().length ? $active.next()
		        :  $(this).find('IMG:first');
		    $active.addClass('last-active');
		    $next.css({opacity: 0.0})
	        .addClass('active')
	        .stop(true,true).animate({opacity: 1.0}, 1000, function() {
	            $active.removeClass('active last-active');
	        });
		 });
	};
})(jQuery);

jQuery(window).load(function() {
	 setInterval('jQuery(".simpleGallery").simpleGallery()',3000);
});