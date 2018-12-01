/*scroll по якорям*/
$(document).ready(function(){
    $('#down').on("click", function () {
    	var element = $(this).attr('href');
    	var dist = $(element).offset().top;

    	$('html, body').animate({'scrollTop': dist}, 1000);

    	return false;
    });




});

$(document).ready(function () {
	jQuery(function($){
	   $("#phone").mask("(99) 999-99-99");
	});
});


 $("#js-form").validate({
  	rules: {
  		form_name: {
  			required: true
  		},
  		form_email: {
  			required: true,
  			email: true
  		},
  		form_phone: {
  			required: true
  		},
  		message: {
  			required: true
  		}
  	},

  	focusCleanup: true,
  	focusInvalid: false
 });

$(document).ready(function () {
   $("#bars").on("click", function () {
  $(".min_menu").addClass("min_active");
 });

 $("#exit").on("click", function () {
  $(".min_menu").removeClass("min_active");
 });
});

window.onresize = function (event) {
  $(".min_menu").hide();
};
