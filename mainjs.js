$(function(){
  var $header = $('header');
  var $page = $('.page-start');
  var $window = $(window);
  var pageOffsetTop = $page.offset().top;
  
  $window.resize(function(){ 
    pageOffsetTop = $page.offset().top;
  });
  
  $window.on('scroll', function(){ 
    var scrolled = $window.scrollTop() >= pageOffsetTop; //스크롤된 상태; true or false
    $header.toggleClass('down', scrolled); 
  });
});
