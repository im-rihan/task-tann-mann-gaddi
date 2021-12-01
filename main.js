//sign in sign up btn after cliked
$(function () {
  $(".btn").click(function () {
    $(".form-signin").toggleClass("form-signin-left");
    $(".form-signup").toggleClass("form-signup-left");
    $(".frame").toggleClass("frame-long");
    $(".signin-active").toggleClass("signin-inactive");
    $(".signup-inactive").toggleClass("signup-active");
    $(".forgot").toggleClass("forgot-left");
    $(this).removeClass("idle").addClass("active");
  });
});

// Email validation
$(document).ready(function () {
  $("#email").keyup(function () {
    if (validateEmail()) {
      $("#email").css("border", "2px solid green");
      $("#email span").innerText("Valid Email");
    } else {
      $("#email").css("border", "2px solid red");
      $("#alert").innerHTML("<p>Please Enter A Valid Email</p>");
    }
  });

  function validateEmail() {
    var email = $("#email").val(); // get input value
    var reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; //validating email
    if (reg.test(email)) {
      return true;
    } else {
      return false;
    }
  }
});

// password matching
$(document).ready(function () {
  $("#mpass").keyup(function () {
    var password = $("#pass").val();
    var confirmPassword = $("#mpass").val();

    if (password != confirmPassword) {
      $(".errorCode").html("Passwords do not match!");
      $(".errorCode").css("color", "red");
      $("#pass").css('border", "2px solid red');
      return false;
    } else {
      $(".errorCode").html("Passwords Matching!");

      $(".errorCode").css("color", "green");
      return true;
    }
  });
});

// Gallery
$(document).ready(function () {
  let listVideo = document.querySelectorAll(".video-list .vid");
  let mainVideo = document.querySelector(".main-video video");
  let title = document.querySelector(".main-video .title");

  listVideo.forEach((video) => {
    video.onclick = () => {
      listVideo.forEach((vid) => vid.classList.remove("active"));
      video.classList.add("active");
      if (video.classList.contains("active")) {
        let src = video.children[0].getAttribute("src");
        mainVideo.src = src;
        let text = video.children[1].innerHTML;
        title.innerHTML = text;
      }
    };
  });
});

// sign up and sign in

let formSignup = document.querySelector("#form-signup-post");
let formSignin = document.querySelector("#form-signin-post");
let signinBtn = document.querySelector(".btn-signin");
let signupBtn = document.querySelector(".btn-signup");

signinBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let frame = document.querySelector('.frame');
  frame.classList.add('hide');
  document.querySelector('.content').classList.remove('hide');
});

signupBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let frame = document.querySelector('.frame');
  frame.classList.add('hide');
  document.querySelector('.content').classList.remove('hide');
});
