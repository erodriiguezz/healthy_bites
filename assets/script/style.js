$(document).ready(function() {
  var clicked = false;

  $(".nav-bttn").click(function() {
    toggleClasses();
  });

  $(".nav-items li a").click(function() {
    toggleClasses();
  });

  function toggleClasses() {
    $('.nav-bttn').toggleClass('clicked');
    $('.nav-items').toggleClass('show');
    $('html').toggleClass('no-scroll');
  }
});
