
$(document).ready(function(){
	
	;(function ( $ ) {
	  $.fn.cards = function() {
	      //Variables
	      var perspective = '500px',
	      delta = 50,
	      width = this.width(),
	      height = this.height(),
	      midWidth = width / 2,
	      midHeight = height / 2;
	      //Events
	      this.on({
	      	mousemove: function(e) {
	      		var pos = $(this).offset(),
	      		cursPosX = e.pageX - pos.left,
	      		cursPosY = e.pageY - pos.top,
	      		cursCenterX = midWidth - cursPosX,
	      		cursCenterY = midHeight - cursPosY;
	
	      		$('.card').css('transform','perspective(' + perspective + ') rotateX('+ (cursCenterY / delta) +'deg) rotateY('+ -(cursCenterX / delta) +'deg)');
	      		$('.card').removeClass('is-out');
	      	},
	      	mouseleave: function() {
	      		$('.card').addClass('is-out');
	      	}
	      });
	      //Return
	      return this;
	  };
	}( jQuery ));
	
	//Set plugin on cards
	$('html').cards();
	
});
