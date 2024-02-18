$('.openbtn').on('click',function(){
   $(this).toggleClass('active');
   $('#g-nav').toggleClass('panelactive');
});
$('#g-nav a').on('click',function(){
  $('.openbtn').removeClass('active');
  $('#g-nav').removeClass('panelactive');
});