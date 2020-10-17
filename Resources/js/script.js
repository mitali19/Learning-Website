$(document).ready(function() {
   

	/*Hamburger Menu*/
	$('.js--nav-icon').click(function(){
		var nav = $('.js--navigation');
		var icon= $('.js--nav-icon i');

		nav.slideToggle(300);

		if (icon.hasClass('fa-bars')){
			icon.addClass('fa-times');
			icon.removeClass('fa-bars');
		}
		else{
			icon.addClass('fa-bars');
			icon.removeClass('fa-times');
		}
	});


	$(".js--section-features").waypoint(function(direction) {

		if (direction == "down") {
			$("nav").addClass('sticky');
		}

		else {
			$("nav").removeClass('sticky');
		}
	},{
		offset: '65px'
	});
	
});
