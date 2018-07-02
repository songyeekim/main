$(function(){
//	$('.menu_depth1>li').mouseover(function(){
//		$('.menu_depth2').stop().slideDown(1000);
////		$('.menu_depth1:after').stop().slideDown();
//	});
//	$('.menu_depth1>li').mouseleave(function(){
//		$('.menu_depth2').stop().slideUp('0.5');
////		$('.menu_depth1:after').stop().slideUp();
//	});
	var now='1';
	var width='1000';
	var slide=setInterval(function(){
		if(now<4){
			$('.mainslide>ul').animate({
				'right':(now*width*(-1))+'px'
			},600)
			now++;
		}else{
			$('.mainslide>ul').animate({
				'right':0
			},600)
			now='1';
		}
	},2000);
	$('.col3 a').click(function(){
		$('#modal').addClass('on');
	});
	$('#modal button').click(function(){
		$('#modal').removeClass('on');
	});
});