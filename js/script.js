$('document').ready(function(){
  $('#j-highlights-row').hide();
});


$('.highlights-header').on('click', function(){
  if($('.highlights-header').hasClass('displaying')){
    $('.highlights-header').removeClass('displaying');
    $('#j-highlights-row').hide();
  }
  else {
    $('.highlights-header').addClass('displaying');
    $('#j-highlights-row').show();
  }
});
