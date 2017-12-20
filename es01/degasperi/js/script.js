function adjustTitles() {
	var winHeight = $(window).height();
	var winWidth = $(window).width();
	var titleHeight = $('#title-page').css('height').replace(/[^-\d\.]/g, '');
	var titlePadding = (winHeight - titleHeight) / 2;
	$('#bars-spanix').html(titlePadding);
	$('#height-test').html(winHeight);
	if (titlePadding >= 0){
		$('#title-page').css({
			'padding-top' : titlePadding,
			'padding-bottom' : titlePadding,
			'width': winWidth
		});		
	} else {
		$('#title-page').css({
			'margin-top' : '0px',
			'margin-bottom' : '0px',
			'height': winHeight,
			'width': winWidth
		});		
	}

	var newMarginLeft = (winWidth - 1230)/2;
	$('#bar-graph').css({
		'margin-left': -newMarginLeft,
		'width': winWidth - newMarginLeft,
		'padding-left': newMarginLeft
	});
	$('#govcontainer').css({
		'margin-left': -newMarginLeft,
		'width': winWidth - newMarginLeft,
		'padding-left': newMarginLeft
	});
	$('#rulerMandati').css({
		'margin-left': -newMarginLeft,
		'width': winWidth - newMarginLeft,
		'padding-left': newMarginLeft,
		'background-color': '#E35555'
	});
	$('#applausi-contenitore').css({
		'margin-left': -newMarginLeft,
		'width': winWidth - newMarginLeft,
		'padding-left': newMarginLeft
	});
	
	//applausi-contenitore
}

function maggioranza() {
	//Add 1 pixel margin to the right, decreasing the width by 1px. T
	for (i=1; i<9; i++) {
		var idMandato = "#mandato" + i;
		var mandW = $(idMandato).css('width').replace(/[^-\d\.]/g, '');
		mandW--;
		$(idMandato).css({
			'width': mandW,
			'margin-right': '1px'
		});
	}
	
	var stato = false;
	$('.senatoOn').click(function(){
		//alert();
		if ( stato == false ) {
			$('.senato').css({
				'display': 'block'
			});
			$('#mandato4').css({
				'margin-top': '9px'
			});
			$('#mandato5').css({
				'margin-top': '9px'
			});
			$('#mandato6').css({
				'margin-top': '24px'
			});
			$('#mandato7').css({
				'margin-top': '44px'
			});
			$('#mandato8').css({
				'margin-top': '83px'
			});
			$('#senatoSwitch').css({
				'opacity': '1',
			});
			$('#senatoSwitch > span .senatoOn').html('Senate displayed');
			stato = true;	
		} else {
			$('.senato').css({
				'display': 'none'
			});
			$('#mandato4').css({
				'margin-top': ''
			});
			$('#mandato5').css({
				'margin-top': ''
			});
			$('#mandato6').css({
				'margin-top': ''
			});
			$('#mandato7').css({
				'margin-top': ''
			});
			$('#mandato8').css({
				'margin-top': ''
			});
			$('#senatoSwitch').css({
				'opacity': '0.5'
			});
			$('#senatoSwitch > span .senatoOn').html('Senate hidden');
			stato = false;	
		}	
	});
	//
	//
}

function parallax() {
	var punti = $(document).scrollTop();
	var winHeight = $(window).height();
	var winWidth = $(window).width();
	var titleHeight = $('#title-page').css('height').replace(/[^-\d\.]/g, '');
	var titlePadding = (winHeight - titleHeight) / 2;
	
	//The parallaz of Alcide's image in the cover
	$('#title-page-container').css({
		'position':'relative',
		'top':-punti
	});
	$('#title-container > p').css({
		'position':'relative',
		'top':punti
	});
	//
	//
	
	//The Parallax of the bar graph
	var barVisible = $('#bar-graph').visible();
	var hGGG = $('#bar-graph').css('height');
	if (punti > 829 && punti < 1084){
		var scrolledPixels = punti - 830;
		var newHeight = 200 + scrolledPixels;
		var newHeightImg = 111 + scrolledPixels;
		var newHeight = newHeight;		
		$('#bar-graph').css({
			'height': newHeight,
			'background-repeat': ''
		});
		$('#bar-visual').css({
			'height': newHeightImg
		});
		$('.indicationsBars').css({
			'display': 'none'
		});
	} else if (punti >= 1085) {
		$('#bar-graph').css({
			'height': '351px',
			'background-repeat': 'repeat'
		});
		$('#bar-visual').css({
			'height': '343px',
			'margin-top': '8px'
		});
		$('.indicationsBars').css({
			'display': 'block'
		});
	} else {
		$('#bar-graph').css({
			'heigth': '',
			'background-repeat': ''
		});
		$('#bar-visual').css({
			'margin-top': ''
		});
		$('.indicationsBars').css({
			'display': 'none'
		});
	}
	//
	//
	
	//The Parallax of the political parts. T
	var show = $('#governi').visible( true );
	
	if (punti >= 2200 && show == false) {
		$('#rulerMandati').css({
			'top': '0px',
			'box-shadow': '0 0 5px #000000'
		});
		$('#histo-stopper').css({
			'display':'none'
		});
	} else {
		$('#rulerMandati').css({
			'top': '',
			'box-shadow': ''
		});
		$('#histo-stopper').css({
			'display':''
		});
	}
	//
	//

	
	//Arrows get to the top. To get it, we have to work on the #histo-stopper, since the .arrow positions are relatives to this. T
	//var trigger = 1233 + 2*titlePadding;
	var trigger = 1181 + 2*titlePadding;
	if (punti > trigger) {
		$('#histo-stopper').css({
			'position':'fixed',
			'top': '-321px',
			'z-index':'1001'
		});
	} else {
		$('#histo-stopper').css({
			'position':'',
			'top': '',
			'z-index':''
		});
	}
	//
	//
	
	/*
var winHeight = $(window).height();
	var winWidth = $(window).width();
	var titleHeight = $('#title-page').css('height').replace(/[^-\d\.]/g, '');
	var titlePadding = (winHeight - titleHeight) / 2;
	var newMarginLeft = (winWidth - 1230)/2;	
	if (winHeight >= 600) {
		var barsPix = (1274 + 2*titlePadding);
	} else {
		var barsPix = (1274);
	}
	
	$('#bars-pix').html(barsPix);
	if (punti > barsPix && punti < (barsPix+234)) {
		$('#bar-graph > img').css({
			'height': 343-(punti-barsPix),
			'position': 'fixed',
			'top': '0px'
		});
		$('#bar-graph').css({
			'position': '',
			'top': ''
		});
		$('#time-bar').css({
			'position': '',
			'top': ''
		});
	} else if (punti >= (barsPix+234)) {
		$('#bar-graph > img').css({
			'position': 'fixed',
			'height': '110px',
			'z-index':'101',
			'left': newMarginLeft	
		});
		$('#bar-graph').css({
			'position': 'fixed',
			'top': '-233px',
			'z-index':'100'
		});
		$('#time-bar').css({
			'position': 'fixed',
			'top': '118px'
		});
	} else {
		$('#bar-graph > img').css({
			'height': '',
			'position': '',
			'top': ''
		});
		$('#bar-graph').css({
			'position': '',
			'top': ''
		});
		$('#time-bar').css({
			'position': ''
		});
	}
*/		
}

function barTypologySelector() {
	$('#bar-switches > div > .rombo-cat').click( function() {
		var nCat = $(this).attr('id');
		var newSrc = "imgs/bar-visual" + nCat + ".png";
		$('#bar-visual').attr('src', newSrc );
		var bgWidth = $('#bar-visual').css('width');
		var bgHeight = $('#bar-visual').css('height');
		bgWidth = bgWidth + " " + bgHeight;
		$('#bar-visual').css({
			'background-image':'url("imgs/bar-visual2.png")',
			'background-size': bgWidth
		});
		$('.rombo-cat').css({
			'opacity': '1',
			'font-weight': '300'
		});		
		$(this).css({
			'opacity': '0.7',
			'font-weight': '500'
		});
		var nOldCat = nCat;
	});
}

function KeywordsSelector() {
	$('#keywords-tool > .legenda > div > .rombo-cat').click( function() {
		var nCat = $(this).attr('id');
		var newSrc = "imgs/WORDS_Flux" + nCat + ".png";
		//alert(newSrc);
		$('#placeholder_1 > .imageplaceholder').css({
			//'background-color':'red',
			'background-image': 'url(' + newSrc + ')'
		});
		$('.rombo-cat').css({
			'opacity': '1',
			'font-weight': '300'
		});		
		$(this).css({
			'opacity': '0.7',
			'font-weight': '500'
		});
		var nOldCat = nCat;
	});
}

function rombGenerator() {
	var id = 1;
	var typology = ['Speeches','Presences','Presidential Communications','Department Communications','Political Conversations','Meeting Minutes','Political Rallies','Interviews','Declarations','Public Calls','Press Conferences','Letters','Telegrams','Toasts','Circulars','Memorials','Notes']
	for (i=1; i<=6; i++) {
		var romboAttivo = '<div id="cat-' + i +'" class="rombo-cat"><div class="circle-typo"></div><span>'+ typology[i-1] + '</span></div>';
		$('#political').append(romboAttivo);
		id++;
	}
	for (i=7; i<=11; i++) {
		var romboAttivo = '<div id="cat-' + i +'" class="rombo-cat"><div class="circle-typo"></div><span>'+ typology[i-1] + '</span></div>';
		$('#media').append(romboAttivo);
		id++;
	}
	for (i=12; i<=17; i++) {
		var romboAttivo = '<div id="cat-' + i +'" class="rombo-cat"><div class="circle-typo"></div><span>'+ typology[i-1] + '</span></div>';
		$('#other').append(romboAttivo);
		id++;
	}
	var romboAttivo = '<div id="" class="rombo-cat" style="position: relative; top: -180px; left: 300px; width: 60px;"><div class="circle-typo" style="background-position: 20px 0;"></div><span>All</span></div>';
	$('#other').append(romboAttivo);
}

function historyHover() {
	//Show small box with the name of the historical event associated. T
	$('.arrow').mouseover(function(){
		var box = this + " > span";
		$( this ).children('span').css({
			'height':'auto',
			'padding-top': '4px',
			'padding-bottom': '6px'
		});		
	});
	$('.arrow').mouseout(function(){
		$( this ).children('span').css({
			'height':'0px',
			'padding-top': '0px',
			'padding-bottom': '0px'
		});
	});
	//
	//
	
}

function focus() {
	var focus = false;
	$('.governo').click( function(){
		if( focus == false ){
			focus = true;
			$( this ).css({
				'height': -10 + $(window).height(),
				'opacity': '0.3',
				'padding-right': '0px'
			});
			$( this ).children('')
					 	
		} else {
			$( this ).css({
				'height': '',
				'opacity': '',
				'padding-right': ''
			});
			focus = false;
		}
	});
}

$(document).scroll(function() {
	var punti = $(document).scrollTop();
	
	parallax();
	//maggioranza();
	
	$('#scroll-test').html(punti);
	//$('#bars-spanix').html(titlePadding);
	//$('#height-test').html(winHeight);
	
});

$(window).resize(function() {
	adjustTitles();
});

$(document).ready(function() {
	var winHeight = $(window).height();
	var punti = $(document).scrollTop();
	var winWidth = $(window).width();
	adjustTitles();
	rombGenerator();
	barTypologySelector();
	historyHover();
	maggioranza();
	focus();
	KeywordsSelector()
	//historyHover();
	
});

