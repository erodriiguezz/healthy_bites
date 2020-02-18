$(document).ready(function() {
  $(".nav-bttn").click(function() {
    toggleClasses();
  });

  $(".nav-link").click(function() {
    toggleClasses();
  });

  function toggleClasses() {
    $('.nav-bttn').toggleClass('clicked');
    $('.nav-items').toggleClass('show');
    $('html').toggleClass('no-scroll');
  }
});

