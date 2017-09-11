$(document).ready(function(){
	var heightPage = $(window).height() + 'px';
	var heightHalfPage = $(window).height()/1.5 + 'px';
	$('.wrap').css({
		'height':heightHalfPage
	});
	$('body').css({'opacity':'1'});
	
	// Document scroll check
	$(document).scroll(function(){
		var theScroll = $(this).scrollTop();
	    if (theScroll > $(window).height()/2 -100){
	    }
    });
    
    
    $(window).on('load', function() {
		var status = $("#status");
		var log = $("#log");
		
		function updateOnlineStatus(event) {
			var condition = navigator.onLine ? "online" : "offline";
			
			status.addClass(condition);
			if(condition == "offline"){
				$('body').addClass('offline');
				$('.art').css({
					'background-image': 'url("../images/black-1.gif")'
				});
				$('.goff, .art').css({'opacity':'0'});
				$('.art').hide();
				setTimeout(function(){
					$('.art').show();
					$('.art').css({'opacity':'1'});
				}, 300);
				
				setTimeout(function(){
					$('.goff').html('<a href="mailto:hello@matteopadova.com">hello@matteopadova.com</a>');
				}, 800);
				setTimeout(function(){
					$('.goff').addClass('fadeInDown');
				}, 1000);
			}
			else{
				$('body').removeClass('offline');
				$('.art').css({
					'background-image': 'url("../images/white-1.gif")'
				});
				$('.art').css({'opacity':'0'});
				$('.art').hide();
				setTimeout(function(){
					$('.art').show();
					$('.art').css({'opacity':'1'});
				}, 300);
			}
		}
	
		$(window).on('online',  updateOnlineStatus);
		$(window).on('offline', updateOnlineStatus);
	});
    
    
    
});

