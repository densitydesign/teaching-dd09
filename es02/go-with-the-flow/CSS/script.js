// JavaScript Document

$(document).ready(function() {

			
		$( ".button_map" ).click(function() {
			var id_temp = $(this).attr("id");
			var id="#"+id_temp;
			if (!$(".mapbox").filter(id).hasClass('active_el')){
				$(".mapbox").filter(id).addClass("active_el").animate({
					opacity: 1
				});
			}else{				
			$(".mapbox").filter(id).animate({opacity:0}).dequeue().removeClass("active_el");
			$(".button_map").not(id).css("opacity",1);
			$(".mapbox").filter('.active_el').not(id).css({
					"opacity":1,
					"z-index":20
				});
			
			}		
		});
		$(".button_map").hover(function(){
			var id_temp = $(this).attr("id");
			var id="#"+id_temp;
			$(".button_map").not(id).css("opacity",0.5);
			if ($(".mapbox").filter(id).hasClass('active_el')){
				$(".mapbox").filter('.active_el').not(id).css({
					"opacity":0.7,
					"z-index":10
				});
			}
		},function (){
			var id_temp = $(this).attr("id");
			var id="#"+id_temp;
			$(".button_map").not(id).css("opacity",1);
			if ($(".mapbox").filter(id).hasClass('active_el')){
				$(".mapbox").filter('.active_el').not(id).css({
					"opacity":1,
					"z-index":20
					});
			}
		});


		
		$(".abaco_leg_but").click(function(){
			var id_temp = $(this).attr("id");
			var id="#"+id_temp;
			if (!$("img").filter(id).hasClass('clicked')){
				$("img").filter(id).addClass('clicked').css("opacity",1);
			}else{
				$("img").filter(id).removeClass('clicked').css("opacity",0);
			}	
		});
		
		$(".abaco_leg_but").hover(function(){
			var id_temp = $(this).attr("id");
			var id="#"+id_temp;
			$(".abaco_leg_exp , .abaco_leg_but").not(id).css("opacity",0.4);
		},function (){
			var id_temp = $(this).attr("id");
			var id="#"+id_temp;
			$(".abaco_leg_exp, .abaco_leg_but").not(id).css("opacity",1);
		});
		
		$(".exp_ball").click(function(){
			var id_temp = $(this).attr("id");
			var id="#"+id_temp;
			if (!$(".actors_img").filter(id).hasClass('clicked')){
				$(".actors_img, .actors_par, .actors_tit").filter(id).addClass('clicked').css("opacity",1);
			}else{
				$(".actors_img, .actors_par, .actors_tit").filter(id).removeClass('clicked').css("opacity",0);
				$(".actors_img, .actors_par, .actors_tit").filter('.clicked').not(id).css("opacity",1);
			}	
		});
		
		$(".exp_ball").hover(function(){
			var id_temp = $(this).attr("id");
			var id="#"+id_temp;
			$(".exp_ball").not(id).css("opacity",0.4);
			if ($(".actors_img").filter(id).hasClass('clicked')){
				$(".actors_img, .actors_par, .actors_tit").filter('.clicked').not(id).css("opacity",0.4);
			}
		},function (){
			var id_temp = $(this).attr("id");
			var id="#"+id_temp;
			$(".exp_ball").not(id).css("opacity",1);
			if ($(".actors_img").filter(id).hasClass('clicked')){
				$(".actors_img, .actors_par, .actors_tit").filter('.clicked').not(id).css("opacity",1);
			}
		});
		
		$(".inter_but").click(function(){
			var id_temp = $(this).attr("id");
			var id="#"+id_temp;
			if (!$(this).hasClass('active')){
				$(".ace").css("display","none");
				$(".ace").filter(id).css("display","block");

				$(".info_box").css("display","none");
				$(".info_box").filter(id).css("display","block");
				$(".inter_but").css({
					"opacity":0.5,
				});
				$(".inter_but").removeClass('active')					
				$(this).addClass('active').css({
					"opacity":1,
				});								
			}else {				
				$(this).css({
					"opacity":0.5,
				});	
				$(".inter_but").removeClass('active')										
					$(".ace").css("display","none");
					$(".ace").filter("#base_but").css("display","block");
					$(".info_box").css("display","none");
	
			}
		});
		$(".inter_but").hover(function(){
				$(this).css({
					"opacity":1,
				});
		},function (){
			if (!$(this).hasClass('active')){
				$(this).css({
					"opacity":0.5,
					});
			}
		});
		
		
		
		
});