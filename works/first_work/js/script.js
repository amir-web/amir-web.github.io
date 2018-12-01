$(document).ready(function () {
	var show = true;
	$(window).on("scroll", function () {

		if (!show) return false;

		var w_top = $(window).scrollTop();
		var e_top = $("#counts").offset().top;

		if (w_top >= e_top + -300) {
			$(".count").spincrement({
				thousandSeperator: "",
				duration: 2000
			});

			show = false;
		}
	});
});

$("#button").on("click", function () {
	$(".search_blog").fadeIn();
});

$(".fa-times-circle").on("click", function () {
	$(".search_blog").fadeOut(1000);
});

$(".fa-bars").on("click", function () {
	$(".min_menu").slideToggle(400);
});

window.onresize = function (event) {
	$(".min_menu").hide();
};