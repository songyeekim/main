$(function(){
	$('.nm_depth1>li').mouseover(function(){
		$(this).children('.nm_depth2').stop().slideDown();
	});
	$('.nm_depth1>li').mouseleave(function(){
		$(this).children('.nm_depth2').stop().slideUp();
	});
	var now='1';
	var max='2';
	var width='1100';
	var slide=setInterval(function(){
		if(now<max){
			$('.pf_slide>ul').animate({
				'left':(now*width*(-1))+'px'
			},600);
			now++;
		}else{
			$('.pf_slide>ul').animate({
				'left':'0'
			},600);
			now='1';
		};
	},2000);
});