/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


$(document).ready(function() {

  $("article").hover(function () {
    $("article").attr("style", "box-shadow: 10px 5px 5px black");
  }, function () {
    $("article").attr("style", null);
  })
 
  $(".fa-flag").hover(function () {
    $(".fa-flag").attr("style", "color: red");
  }, function () {
    $(".fa-flag").attr("style", "color: #1f2551");
  })

  $(".fa-retweet").hover(function () {
    $(".fa-retweet").attr("style", "color: red");
  }, function () {
    $(".fa-retweet").attr("style", "color: #1f2551");
  })

  $(".fa-heart").hover(function () {
    $(".fa-heart").attr("style", "color: red");
  }, function () {
    $(".fa-heart").attr("style", "color: #1f2551");
  })


});

// box-shadow: 10px 5px 5px black;