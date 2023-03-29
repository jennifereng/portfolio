$('.menu-icon').bind('click', function () {
  $(this).toggleClass('active');
  $('.menu-overlay').toggleClass('overlay-active');
  $('.logo').toggleClass('inverse');
  $(this).find('div').removeClass('no-animation');
});
