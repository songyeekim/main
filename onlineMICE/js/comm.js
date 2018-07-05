$(function () {
	$('.menu_depth1>li').click(function () {

		$('.menu_depth1>li').removeClass('on');
		$(this).addClass('on');
	});
	$('.menu_left').css('left', '-300px');

	$('.link_open').click(function () {
		$('.menu_left').animate({
			left: 0
		});
	});

	$('.link_close').click(function () {
		$('.menu_left').animate({
			left: '-300px'
		});
	});
});
