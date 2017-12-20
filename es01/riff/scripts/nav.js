//Nav Scroll

$(window).scroll(function(){
	var scrollYpos= $(document).scrollTop();
	var h=670;
	var d=0;
	
	if (scrollYpos >=h*0+d && scrollYpos <h*1+d) {
		$('#nav1').css('opacity', .2);
	}
	else {
		$('#nav1').css('opacity', 1);
	}
	if (scrollYpos >=h*1+d && scrollYpos <h*2+d) {
		$('#nav2').css('opacity', .2);
	}
	else {
		$('#nav2').css('opacity', 1);
	}
	if (scrollYpos >=h*2+d && scrollYpos <h*3+d) {
		$('#nav3').css('opacity', .2);
	}
	else {
		$('#nav3').css('opacity', 1);
	}
	if (scrollYpos >=h*3+d && scrollYpos <h*4+d) {
		$('#nav4').css('opacity', .2);
	}
	else {
		$('#nav4').css('opacity', 1);
	}
	if (scrollYpos >=h*4+d && scrollYpos <h*5+d) {
		$('#nav5').css('opacity', .2);
	}
	else {
		$('#nav5').css('opacity', 1);
	}
	if (scrollYpos >=h*5+d && scrollYpos <h*6+d) {
		$('#nav6').css('opacity', .2);
	}
	else {
		$('#nav6').css('opacity', 1);
	}
	if (scrollYpos >=h*6+d && scrollYpos <h*7+d) {
		$('#nav7').css('opacity', .2);
	}
	else {
		$('#nav7').css('opacity', 1);
	}
	if (scrollYpos >=h*7+d && scrollYpos <h*8+d) {
		$('#nav8').css('opacity', .2);
	}
	else {
		$('#nav8').css('opacity', 1);
	}
	if (scrollYpos >=h*8+d && scrollYpos <h*9+d) {
		$('#nav9').css('opacity', .2);
	}
	else {
		$('#nav9').css('opacity', 1);
	}
})

$(document).ready(function(){
	$('#navspot').localScroll(800);
})

$(document).ready(function(){
	$('#logo').localScroll(800);
})
