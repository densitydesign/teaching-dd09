$(document).ready(function() {
  $('.rollover-items li').click(function() {
    $('.rollover-items li').removeClass('active');
    $(this).addClass('active');
    
    var position = $(this).position().left;
    
    $('.highlight').animate({'left' : position}, 200);
    
    var clickedItem = $(this).attr('id');
    var clickedItem = "rollover-"+clickedItem;
    
    $('.rollover-block').removeClass('block-active');    
    $('#'+clickedItem+'').addClass('block-active');
  });
});