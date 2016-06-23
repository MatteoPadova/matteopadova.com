$(document).ready(function(){
	var heightPage = $(window).height() + 'px';
	var heightHalfPage = $(window).height()/1.5 + 'px';
	$('.wrap').css({
		'height':heightHalfPage
	});
	
	// Document scroll check
	$(document).scroll(function(){
		var theScroll = $(this).scrollTop();
	    if (theScroll > $(window).height()/2 -100){
	    }
    });
});
