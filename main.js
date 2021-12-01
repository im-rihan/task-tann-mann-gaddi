$(function () {
  $(".btn").click(function () {
    $(".form-signin").toggleClass("form-signin-left");
    $(".form-signup").toggleClass("form-signup-left");
    $('.frame').toggleClass('frame-long');

    $(".signup-inactive a").toggleClass("signup-active a");
    $(".signin-active a").toggleClass("signin-inactive a");
    
   
  });
});
