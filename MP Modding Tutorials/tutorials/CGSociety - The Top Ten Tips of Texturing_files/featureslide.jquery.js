// ---- Feature page scroller---->	
$(document).ready(function(){
	pageWidth = $("div#customStory").width();
	$("div#customStory ul.featurepageslist li").css("display","none");
	$("div#customStory ul.featurepageslist li.pageone").css("display","block");
//	var t=setTimeout(resizeFeature,6000);
	aPages = $("div#customStory ul.featurepageslist li");
	
	currSelPage = 0;
	$(".previousPage").click(function(){
		$("div#customStory ul.featurepageslist li").css("display","block");
		if(currSelPage!=0){
			currSelPage = currSelPage - 1;
			currPos = parseInt($("div#customStory ul.featurepageslist").css("marginLeft").replace("px",""));
			newPos = currPos+pageWidth;
			$("div#customStory ul.featurepageslist").animate({"marginLeft": newPos+"px"}, "1500", "easeInOutQuart",function(){
				$("div#customStory").css("height",($(aPages[currSelPage]).height()+74)+"px");
				scrolltotop.scrollup();
			});
		}
		return false;
	});
	$(".nextPage").click(function(){
		$("div#customStory ul.featurepageslist li").css("display","block");
		if(currSelPage<$("div#customStory ul.featurepageslist li.featurepage").length){
			currSelPage = currSelPage + 1;
			currPos = parseInt($("div#customStory ul.featurepageslist").css("marginLeft").replace("px",""));
			newPos = currPos-pageWidth;
			$("div#customStory ul.featurepageslist").animate({"marginLeft": newPos+"px"}, "1500","easeInOutQuart",function(){
				$("div#customStory").css("height",($(aPages[currSelPage]).height()+74)+"px");
				scrolltotop.scrollup();
			});
		}
		return false;
	});
})


function resizeFeature(){
	aPage = $("div#customStory ul.featurepageslist li.pageone");
	console.log($(aPage).height(),"thing");
	console.log($(aPage).css('height'),"thing");
	$("div#customStory").css("height",($(aPage).height()+74)+"px");
}

