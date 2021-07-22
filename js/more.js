$(function(){
  $('.read-more-box').hover(
    function() {
      $('.read-more-box-left, .read-more-box-right').animate({
        'width': '100%',
        'height': '100%'
      }, 300, 'swing',function(e){$(this).stop(false, true);});
    },
    function() {
      $('.read-more-box-left, .read-more-box-right').animate({
        'width': 30,
        'height': 23
      }, 300, 'swing',function(e){$(this).stop(false, true);});
    }
  )
});