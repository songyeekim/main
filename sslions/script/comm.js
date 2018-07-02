$(function(){
	$('.menu_depth1>li').mouseover(function(){
		$(this).children('.menu_depth2').stop().slideDown();
	});
	$('.menu_depth1>li').mouseleave(function(){
		$(this).children('.menu_depth2').stop().slideUp();
	});
	var now='0';
	$('.mainslide li').eq(now).children('.big').fadeIn();
	$('.mainslide li').eq(now).children('.small').fadeTo('fast',1);
	setInterval(function(){
		if(now<3){
			$('.mainslide li').eq(now).children('.big').fadeOut();
			$('.mainslide li').eq(now).children('.small').fadeTo('fast',0.5);
			now++;
		}else{
			$('.mainslide li').eq(now).children('.big').fadeOut();
			$('.mainslide li').eq(now).children('.small').fadeTo('fast',0.5);
			now='0';
		}
		$('.mainslide li').eq(now).children('.big').fadeIn();
		$('.mainslide li').eq(now).children('.small').fadeTo('fast',1);
	},2000);
});