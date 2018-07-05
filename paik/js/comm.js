$(function(){
	$('.tab_comm>li>a').click(function(){
		$('.tab_comm>li').removeClass('click_on');
		$(this).parents('li').addClass('click_on');
	});
});