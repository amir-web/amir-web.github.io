$(document).ready(function () {
	$("a[href^='#']").click(function () {
		elementClick = $(this).attr("href");
		dest = $(elementClick).offset().top;
		$("html,body").animate({ scrollTop: dest },1000);
		return false;
	});


	$(".site1").magnificPopup({
		type: 'image',
		gallery: {
			enabled : true
		},
		removalDelay: 500,
		mainClass: 'mfp-fade'
	});


	new WOW().init();


	$(".mbars").on('click', function () {
		$(".back_min").fadeIn(500);
		$(".mbars").hide();
	});


	$(".exit").on('click', function () {
		$(".back_min").fadeOut(500);
		$(".mbars").show();
	});

	$(".hide_a").on('click', function () {
		$(".back_min").fadeOut(500);
		$(".mbars").show();
	});

});