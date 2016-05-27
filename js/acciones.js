// JavaScript Document
$(document).on("ready",function(){
	$('.mobile-nav-icon').on('click', function(){
		$('.main-nav').slideToggle(200);
	var icon = $(".mobile-nav-icon i");
	if (icon.hasClass('ion-navicon-round'))
	{
		icon.removeClass('ion-navicon-round');
		icon.addClass('ion-close-round');
	}
	else
	{
		icon.removeClass('ion-close-round');
		icon.addClass('ion-navicon-round');
	}
  }); //Click de mobile-nav-icon
  $(".section-us").waypoint(function(direction) {
	  if(direction == "down")
	  {
		  $("header nav").addClass('sticky');
	  }
	  else
	  {
		  $("header nav").removeClass('sticky');
	  }
  }); //Waypoint section-features
  
  $("#btn-us").on('click', function(){
	  $('html body').animate({
		  scrollTop: $('.section-us').offset().top
	  }, 1000); // animate body
  }); // click btn-plan
  
  $("#btn-animal").on('click', function(){
	  $('html body').animate({
		  scrollTop: $('.galery').offset().top
	  }, 1000); // animate body
  }); // click btn-features
  
  $("#btn-visit").on('click', function(){
	  $('html body').animate({
		  scrollTop: $('.section-form').offset().top
	  }, 1000); // animate body
  }); // click btn-features
  
  $("#btn-entry").on('click', function(){
	  $('html body').animate({
		  scrollTop: $('.section-entry').offset().top
	  }, 1000); // animate body
  }); // click btn-steps
  
  $("#btn-cities").on('click', function(){
	  $('html body').animate({
		  scrollTop: $('.section-cities').offset().top
	  }, 1000); // animate body
  }); // click btn-cities
  
  $("#btn-form").on('click', function(){
	  $('html body').animate({
		  scrollTop: $('.section-form').offset().top
	  }, 1000); // animate body
  }); // click btn-form
}); //ready function