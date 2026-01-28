

jQuery(document).ready(function(){
		
	// facebook hack

	jQuery(".fb_reset").css("display","none");
	
	function fixTDHeight(){
		// ---- Old Feature Height Fix ----
		jQuery("#featureWrapper td").each(function (i) {
			tdHeight = jQuery(this).attr("height");
			if(tdHeight){
				tdHeight = parseInt(tdHeight.replace("px",""));
			}
			tdTopPadding = parseInt(jQuery(this).css("paddingTop").replace("px",""));
			
		//	console.log(tdHeight+" "+tdTopPadding);
			
			if(IsNumeric(tdHeight) && tdHeight > 0 &&IsNumeric(tdTopPadding) && tdTopPadding > 0){
				newHeight = tdHeight-tdTopPadding;
				if(newHeight<0){
					newHeight = 0;
				}
				jQuery(this).height(newHeight);
			}
		});
	}
	
	function IsNumeric(input){
	    var RE = /^-{0,1}\d*\.{0,1}\d+$/;
	    return (RE.test(input));
	}

	
	// ---- MEGA SUBNAV ---->

	//On Hover Over

	function megaDropDownOver(){
		if (jQuery(this).find(".megaDropDown").length > 0){
			jQuery(this).find(".megaDropDown").stop().css({'opacity':'1'}).show(); //Find sub and fade it in
			jQuery(this).find("a.main").addClass("megahover"); //add megahover class
			jQuery(this).addClass("megahover"); //add megahover to list class
		}
	}

	//On Hover Out
	function megaDropDownOut(){
	  jQuery(this).find(".megaDropDown").stop().fadeTo(300, 0, function() { //Fade to 0 opactiy
	      jQuery(this).hide();  //after fading, hide it
	  });
	  jQuery(this).find("a.main").removeClass("megahover"); //add hover class
	  jQuery(this).removeClass("megahover"); //add hover class
	}

	//Set custom configurations
	var megaDropDownConfig = {
	     sensitivity: 2, // number = sensitivity threshold (must be 1 or higher)
	     interval: 100, // number = milliseconds for onMouseOver polling interval
	     over: megaDropDownOver, // function = onMouseOver callback (REQUIRED)
	     timeout: 500, // number = milliseconds delay before onMouseOut
	     out: megaDropDownOut // function = onMouseOut callback (REQUIRED)
	};

	jQuery("ul#topNav li .megaDropDown").css({'opacity':'0'}); //Fade sub nav to 0 opacity on default
	jQuery("ul#topNav li").hoverIntent(megaDropDownConfig); //Trigger Hover intent with custom configurations
	
	jQuery('ul#topNav li div.megaDropDown').prev('a.main').click(function(e) {
	    e.preventDefault();
	});


		
	// ---- SEARCH ---->
		
		jQuery(".searchBox").hide();
		jQuery('.searchIcon, .searchClose').click(function(e){
			e.preventDefault();
			jQuery(".searchBox").fadeToggle();
			jQuery(".searchBox .searchField").focus();
			clearTimeout(searchTimeout);
		});
		

		
		jQuery(".searchIcon, .searchBox").hover(
			function () {
					clearTimeout(searchTimeout);
			},
			function () {
				searchTimeout = setTimeout(
				function(){jQuery(".searchBox").fadeOut();}
				, 5000);
		});
		
	// ---- LOGIN ---->
		
		jQuery(".loginBox").hide();
		jQuery('.memLog .loginLink, .loginClose, .link2LoginPopup').click(function(e){
			e.preventDefault();
			jQuery(".loginBox").fadeToggle();
			jQuery(".loginBox #loginUser").focus();
			jQuery('html, body').animate({ scrollTop: 0 }, 'slow');
		});
		
	// ---- REGISTER ---->

		jQuery(".link2registerpopup").prettyPhoto({
			allow_resize:false,
			theme: 'none',
			social_tools: '',
			deeplinking: false, 
			iframe_markup: '<div style="width:{width}px;height:{height}px" id="registerFormIframe"><iframe src="{path}" style="width:100%;height:100%" frameborder="no"></iframe></div>'
	    });
		
		
		
		
		


			//-- arrows --
				
				jQuery(".imageScroll, .imageScrollArrows").hover(
				function () {
					jQuery(".imageScrollArrows").fadeIn();
					if(typeof arrowTimeout !== "undefined"){
					clearTimeout(arrowTimeout);
					}
				},
				function () {
					arrowTimeout = setTimeout(
					function(){jQuery(".imageScrollArrows").fadeOut();}
					, 3000);
				});


	//-- clear text in password field --

				jQuery('#password-clear').show();
				jQuery('#loginPass').hide();
				jQuery('#password-clear').focus(function() {
				    jQuery('#password-clear').hide();
				    jQuery('#loginPass').show();
				    jQuery('#loginPass').focus();
				});
				jQuery('#loginPass').blur(function() {
				    if(jQuery('#loginPass').val() == '') {
				        jQuery('#password-clear').show();
				        jQuery('#loginPass').hide();
				    }
				});
				jQuery('#loginUser').focus(function() {
					if(jQuery('#loginUser').val() == 'Username') {
						jQuery('#loginUser').val('');
						jQuery('#loginUser').focus();
					}
				});
				jQuery('#loginUser').blur(function() {
					if(jQuery('#loginUser').val() == '') {
						jQuery('#loginUser').val('Username');
					}
				});

		fixTDHeight();
	});
	
	function imageCarousel(){
		// ---- CAROUSEL ---->	
			jQuery(".imageCarousel").jCarouselLite({
				btnNext: ".next",
				btnPrev: ".prev",
				easing: "easeInOutQuart",
				speed: 1500,
				scroll: 3,
				visible: 9,
				auto: 7000
			});
	}
	
	function showGallery(){ 
			imageCarousel();
			jQuery(".imageCarousel").hide();
			jQuery(".imageCarousel").fadeIn(500);
		 }

	jQuery(window).load(function() {

		/* if secure > hide scroll and shorten height */
		if ("https:" == document.location.protocol) {
			$("#imageScroll").css('display', 'none');
			$("#CGSheader").css('height', '142px');
		} 
	
		else {

			jQuery.ajax({
				  url: "/static/proxy/proxy.php",
				  cache: true,
				  success: function(html){
					jQuery("#imageScroll").append(html);
					var s = setTimeout(showGallery,1000); 
				  }
			});

		}
	});
	
	
	
	