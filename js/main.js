// 'Return to top' button on scroll

$(window).scroll(function() {
  const scrollToTopButton = $('#top');
  if ($(this).scrollTop() > 200) {
    scrollToTopButton.show();
  } else {
    scrollToTopButton.hide();
  }
});

$('#top').click(function() {
  $('html, body').animate({ scrollTop: 0 }, 'smooth');
});


// Trigger unloading animation when exiting hover mode

$(document).ready(function() {
  $('nav a').hover(
    function() {
      $(this).removeClass('unloading');
    },
    function() {
      $(this).addClass('unloading');
    }
  );
});
