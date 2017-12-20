//Nav Scroll


$(window).scroll(function(){
	var scrollYpos= $(document).scrollTop();
	var h=$(window).height();
	var d=0;
	
	if (scrollYpos >=h*0+d && scrollYpos <h*1+d) {
		$('#nav1').css('opacity', .4);
	}
	else {
		$('#nav1').css('opacity', 1);
	}
	if (scrollYpos >=h*1+d && scrollYpos <h*2+d) {
		$('#nav2').css('opacity', .4);
	}
	else {
		$('#nav2').css('opacity', 1);
	}
	if (scrollYpos >=h*2+d && scrollYpos <h*3+d) {
		$('#nav3').css('opacity', .4);
	}
	else {
		$('#nav3').css('opacity', 1);
	}
	if (scrollYpos >=h*3+d && scrollYpos <h*4+d) {
		$('#nav4').css('opacity', .4);
	}
	else {
		$('#nav4').css('opacity', 1);
	}
	if (scrollYpos >=h*4+d && scrollYpos <h*5+d) {
		$('#nav5').css('opacity', .4);
	}
	else {
		$('#nav5').css('opacity', 1);
	}
	if (scrollYpos >=h*5+d && scrollYpos <h*6+d) {
		$('#nav6').css('opacity', .4);
	}
	else {
		$('#nav6').css('opacity', 1);
	}
	if (scrollYpos >=h*6+d && scrollYpos <h*7+d) {
		$('#nav7').css('opacity', .4);
	}
	else {
		$('#nav7').css('opacity', 1);
	}
	if (scrollYpos >=h*7+d && scrollYpos <h*8+d) {
		$('#nav8').css('opacity', .4);
	}
	else {
		$('#nav8').css('opacity', 1);
	}
	if (scrollYpos >=h*8+d && scrollYpos <h*9+d) {
		$('#nav9').css('opacity', .4);
	}
	else {
		$('#nav9').css('opacity', 1);
	}
	if (scrollYpos >=h*9+d && scrollYpos <h*10+d) {
		$('#nav10').css('opacity', .4);
	}
	else {
		$('#nav10').css('opacity', 1);
	}
	if (scrollYpos >=h*10+d && scrollYpos <h*11+d) {
		$('#nav11').css('opacity', .4);
	}
	else {
		$('#nav11').css('opacity', 1);
	}
	if (scrollYpos >=h*11+d && scrollYpos <h*12+d) {
		$('#nav12').css('opacity', .4);
	}
	else {
		$('#nav12').css('opacity', 1);
	}
	if (scrollYpos >=h*12+d && scrollYpos <h*13+d) {
		$('#nav13').css('opacity', .4);
	}
	else {
		$('#nav13').css('opacity', 1);
	}
	if (scrollYpos >=h*13+d && scrollYpos <h*14+d) {
		$('#nav14').css('opacity', .4);
	}
	else {
		$('#nav14').css('opacity', 1);
	}
	if (scrollYpos >=h*14+d && scrollYpos <h*15+d) {
		$('#nav15').css('opacity', .4);
	}
	else {
		$('#nav15').css('opacity', 1);
	}
	if (scrollYpos >=h*15+d && scrollYpos <h*16+d) {
		$('#nav16').css('opacity', .4);
	}
	else {
		$('#nav16').css('opacity', 1);
	}
	if (scrollYpos >=h*16+d && scrollYpos <h*17+d) {
		$('#nav17').css('opacity', .4);
	}
	else {
		$('#nav17').css('opacity', 1);
	}
	if (scrollYpos >=h*17+d && scrollYpos <h*18+d) {
		$('#nav18').css('opacity', .4);
	}
	else {
		$('#nav18').css('opacity', 1);
	}
	if (scrollYpos >=h*18+d && scrollYpos <h*19+d) {
		$('#nav19').css('opacity', .4);
	}
	else {
		$('#nav19').css('opacity', 1);
	}
})

$(document).ready(function(){
	$('#navspot').localScroll(800);
})

$(document).ready(function(){
	$('#logo').localScroll(800);
})
