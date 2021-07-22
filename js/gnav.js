$(function(){
  $('.gnav-item a').hover(
    function() {
      $(this).animate({color: '#e00000'}, 300, 'swing',function(e){$(this).stop(false, true);});
    },
    function() {
      $(this).animate({color: '#fff'}, 300, 'swing',function(e){$(this).stop(false, true);});
    }
  )
});