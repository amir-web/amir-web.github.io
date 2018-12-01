$(document).ready(function () {
	$("#reg").on("click", function () {
		$(".modal_back").fadeIn();
	});

	$(".fa-times").on("click", function () {
		$(".modal_back").fadeOut(1000);
	});

	$("#p_l").on("click", function () {
		$(".modal_back_log").fadeIn();
	});

	$(".fa-times").on("click", function () {
		$(".modal_back_log").fadeOut(1000);
	});

	
	$("#min_menu_bars").on("click", function () {
		$(".menu_link_left").slideUp();
		$(".min_menu").slideToggle(500);
	});

	$("#link_left_bars").on("click", function () {
		$(".min_menu").slideUp();
		$(".menu_link_left").slideToggle(500);
	});



  $('.slick').slick({
    autoplay: true,
    dots: false,
    slidesToShow: 6,
    arrows: false
  });

});

 $("#form_reg").validate({
  	rules: {
  		login: {
  			required: true
  		},
  		email: {
  			required: true,
  			email: true
  		},
  		password: {
  			required: true
  		},
  		a_password: {
  			required: true,
  			equalTo: "#pswd"
  		}
  	},

  	focusCleanup: true,
  	focusInvalid: false
 });

 $("#form_log").validate({
  	rules: {
  		login: {
  			required: true
  		},
  		email: {
  			required: true,
  			email: true
  		},
  		password: {
  			required: true
  		},
  		a_password: {
  			required: true,
  			equalTo: "#pswd"
  		}
  	},

  	focusCleanup: true,
  	focusInvalid: false
 });


window.onresize = function (event) {
	$(".min_menu").hide();
};


$(".client_li").on("click", function () {
  $(".client_li").removeClass("client_active");
  $(this).addClass("client_active");
});

