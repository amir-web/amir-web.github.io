$(document).ready(function () {

	$("#but_min_menu").on("click", function () {
		$(".header").addClass("h_active");
	});

	$("#close").on("click", function () {
		$(".header").removeClass("h_active");
	});

	$("#btn_sch").on("click", function () {
		$(".blog_search").slideToggle();
	});


	$("#exit").on("click", function () {
		$(".blog_search").slideToggle();
	});

	$('#btn_search').click(function() {
	    location.reload();
	});


	$("#to_up").on("click", function () {
		$('body').animate({'scrollTop': 0}, 600);
		$('html').animate({'scrollTop': 0}, 600);
	});


	$("#to_up").hide();

	$(window).scroll(function () {
		if ($(window).scrollTop() > 200) {
			$("#to_up").show();
		}else{
			$("#to_up").hide();
		}
	});


	$('.slick').slick({
		autoplay: true,
		asNavFor:'.slider_2',
		dots: false,
		arrows: false
	});
	$('.slider_2').slick({
		slidesToShow: 5,
		asNavFor:'.slick',
		focusOnSelect: true,
		centerMode: true,
		arrows: false
	});

	
});