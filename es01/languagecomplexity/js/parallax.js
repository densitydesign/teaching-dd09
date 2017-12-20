$(document).ready(function() {
	
	redrawDotNav();
	
	/* Scroll event handler */
    $(window).bind('scroll',function(e){
    	parallaxScroll();
		redrawDotNav();
    });
    
	/* Next/prev and primary nav btn click handlers */
	$('a.s1').click(function(){
    	$('html, body').animate({
    		scrollTop:0
    	}, 1000, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
	});
    $('a.s2').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#section2').offset().top
    	}, 1000, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
    });
    $('a.s3').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#section3').offset().top
    	}, 1000, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
    });
	$('a.s4').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#section4').offset().top
    	}, 1000, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
    });
		$('a.s5').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#section5').offset().top
    	}, 1000, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
    });
		$('a.s6').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#section6').offset().top
    	}, 1000, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
    });
		$('a.s7').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#section7').offset().top
    	}, 1000, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
    });
		$('a.s8').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#section8').offset().top
    	}, 1000, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
    });
		$('a.s9').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#sectionF').offset().top
    	}, 1000, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
    });
    
    /* Show/hide dot lav labels on hover */
    $('nav#primary a').hover(
    	function () {
			$(this).prev('h1').show();
		},
		function () {
			$(this).prev('h1').hide();
		}
    );
    
});

/* Scroll the background layers */
function parallaxScroll(){
	var scrolled = $(window).scrollTop();
	$('#parallax-bg1').css('top',(0-(scrolled*.25))+'px');
	$('#parallax-bg2').css('top',(0-(scrolled*.5))+'px');
	$('#parallax-bg3').css('top',(0-(scrolled*.75))+'px');
}

/* Set navigation dots to an active state as the user scrolls */
function redrawDotNav(){
	var section1Top =  0;
	// The top of each section is offset by half the distance to the previous section.
	var section2Top =  $('#section2').offset().top - (($('#section3').offset().top - $('#section2').offset().top) / 2);
	var section3Top =  $('#section3').offset().top - (($('#section4').offset().top - $('#section3').offset().top) / 2);
	var section4Top =  $('#section4').offset().top - (($('#section5').offset().top - $('#section4').offset().top) / 2);
	var section5Top =  $('#section5').offset().top - (($('#section6').offset().top - $('#section5').offset().top) / 2);
	var section6Top =  $('#section6').offset().top - (($('#section7').offset().top - $('#section6').offset().top) / 2);
	var section7Top =  $('#section7').offset().top - (($('#section8').offset().top - $('#section7').offset().top) / 2);	
	var section8Top =  $('#section8').offset().top - (($('#section9').offset().top - $('#section8').offset().top) / 2);	
	var section9Top =  $('#section9').offset().top - (($(document).height() - $('#section9').offset().top) / 2);;
	$('nav#primary a').removeClass('active');
	if($(document).scrollTop() >= section1Top && $(document).scrollTop() < section2Top){
		$('nav#primary a.s1').addClass('active');
	} else if ($(document).scrollTop() >= section2Top && $(document).scrollTop() < section3Top){
		$('nav#primary a.s2').addClass('active');
	} else if ($(document).scrollTop() >= section3Top && $(document).scrollTop() < section4Top){
		$('nav#primary a.s3').addClass('active');
	} else if ($(document).scrollTop() >= section4Top && $(document).scrollTop() < section5Top){
		$('nav#primary a.s4').addClass('active');
	}else if ($(document).scrollTop() >= section5Top && $(document).scrollTop() < section6Top){
		$('nav#primary a.s5').addClass('active');
	}else if ($(document).scrollTop() >= section6Top && $(document).scrollTop() < section7Top){
		$('nav#primary a.s6').addClass('active');
	} else if ($(document).scrollTop() >= section7Top && $(document).scrollTop() < section8Top){
		$('nav#primary a.s7').addClass('active');
	} else if ($(document).scrollTop() >= section8Top && $(document).scrollTop() < section9Top){
		$('nav#primary a.s8').addClass('active');
	} else if ($(document).scrollTop() >= section9Top){
		$('nav#primary a.s9').addClass('active');
	}
	
}
