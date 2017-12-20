$(document).ready(function() {
	
	redrawDotNav();
	
	/* Scroll event handler */
    $(window).bind('scroll',function(e){
    	parallaxScroll();
		redrawDotNav();
    });
    
	/* Next/prev and primary nav btn click handlers */
	$('a.copertina').click(function(){
    	$('html, body').animate({
    		scrollTop:0
    	}, 1000, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
	});
    $('a.focus').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#focus').offset().top
    	}, 1000, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
    });
    $('a.first').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#first').offset().top
    	}, 1000, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
    });
    $('a.second').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#second').offset().top
    	}, 1000, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
    });
	$('a.third').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#third').offset().top
    	}, 1000, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
    });
	$('a.fourth').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#fourth').offset().top
    	}, 1000, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
    });
	$('a.fifth').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#fifth').offset().top
    	}, 1000, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
    });
	$('a.about').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#about').offset().top
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
	$('#parallax-bg1').css('top',(0-(scrolled*1))+'px');
	$('#parallax-bg2').css('top',(0-(scrolled*1))+'px');
	$('#parallax-bg3').css('top',(0-(scrolled*1))+'px');
	$('#parallax-bg4').css('top',(0-(scrolled*1))+'px');
	$('#parallax-bg5').css('top',(0-(scrolled*1))+'px');
	$('#parallax-bg6').css('top',(0-(scrolled*1))+'px');
	$('#parallax-bg7').css('top',(0-(scrolled*1))+'px');	
	}

/* Set navigation dots to an active state as the user scrolls */
function redrawDotNav(){
	
	var section1Top =  0;
	
	// The top of each section is offset by half the distance to the previous section.
	var section2Top =  $('#focus').offset().top - (($('#first').offset().top - $('#focus').offset().top) / 2);
	var section3Top =  $('#first').offset().top - (($('#second').offset().top - $('#first').offset().top) / 2);
	var section4Top =  $('#second').offset().top - (($('#third').offset().top - $('#second').offset().top) / 2);
	var section5Top =  $('#third').offset().top - (($('#fourth').offset().top - $('#third').offset().top) / 2);
	var section6Top =  $('#fourth').offset().top - (($('#fifth').offset().top - $('#fourth').offset().top) / 2);
	var section7Top =  $('#fifth').offset().top - (($('#about').offset().top - $('#fifth').offset().top) / 2);
	var section8Top =  $('#about').offset().top - (($(document).height() - $('#about').offset().top) / 2);;
	
	$('nav#primary a').removeClass('active');
	
	if($(document).scrollTop() >= section1Top && $(document).scrollTop() < section2Top){
		$('nav#primary a.copertina').addClass('active');
		
	} else if ($(document).scrollTop() >= section2Top && $(document).scrollTop() < section3Top){
		$('nav#primary a.focus').addClass('active');
		
	} else if ($(document).scrollTop() >= section3Top && $(document).scrollTop() < section4Top){
		$('nav#primary a.first').addClass('active');
		
	} else if ($(document).scrollTop() >= section4Top && $(document).scrollTop() < section5Top){
		$('nav#primary a.second').addClass('active');
		
	} else if ($(document).scrollTop() >= section5Top && $(document).scrollTop() < section6Top){
		$('nav#primary a.third').addClass('active');
		
	} else if ($(document).scrollTop() >= section6Top && $(document).scrollTop() < section7Top){
		$('nav#primary a.fourth').addClass('active');
		
	} else if ($(document).scrollTop() >= section7Top && $(document).scrollTop() < section8Top){
		$('nav#primary a.fifth').addClass('active');
		
	} else if ($(document).scrollTop() >= section8Top){
		$('nav#primary a.about').addClass('active');	
	}
	
}
