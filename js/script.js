$('document').ready(function(){
  $('#j-highlights-row').hide();
  $('#j-commentary-row').hide();
});

//Highlights display
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


//Commentary Display
$('.commentary-header').on('click', function(){
  if($('.commentary-header').hasClass('displaying')){
    $('.commentary-header').removeClass('displaying');
    $('#j-commentary-row').hide();
  }
  else {
    $('.commentary-header').addClass('displaying');
    $('#j-commentary-row').show();
  }
});
