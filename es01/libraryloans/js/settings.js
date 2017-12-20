// JavaScript Document


$(document).ready(function(){
//  Settings Panel 
	$('.open-buttton').click(function(){
	
		if($('.open-buttton').hasClass('closed')){
			$(this).parent('.settings-panel').stop().animate({left:175},400);
			$(this).removeClass('closed').addClass('opened');
		} else {
			$(this).parent('.settings-panel').stop().animate({left:0},400);
			$(this).removeClass('opened').addClass('closed');
		}
	});

	
// Bacground Patterns and Background Colour 
	
$('.settings-panel .bg_patterns ul li').click(function(){
		var thisBGcol = $(this).css('background-color');
		var thisBGimg = $(this).css('background-image');
		$('#home_static').css('background-image', thisBGimg);
		$('#home_static').css('background-color', thisBGcol);
	});
	
	
	$("ul.c_patterns li").click(function () {
	 var myClass = $(this).attr("class");
	if(myClass == 'default'){
	$('#color').attr('href','css/style_yellow.css');
	}
	else if(myClass == 'c1'){
	$('#color').attr('href','css/style_cyan.css');
		
	} else if(myClass == 'c2'){
	$('#color').attr('href','css/style_green.css');
			
	}  else if(myClass == 'c3'){
	$('#color').attr('href','css/style_yellow.css');
	
	}  else if(myClass == 'c4'){
	$('#color').attr('href','css/style_pink.css');
	
	} else if(myClass == 'c5'){
	$('#color').attr('href','css/style_red.css');
	}
	});
	
	
	});
