/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


$(document).ready(function() {


  const renderTweets = function(tweets) {
  
    $(".tweet-container").empty();
    for (let tweet of tweets) {
    
      let $tweet = createTweetElement(tweet);

    
      $('.tweet-container').append($tweet);
    }
  };

  const escape = function(str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };
  
  
  const createTweetElement = function(tweet) {
    console.log(tweet.created_at);
    const created = timeago.format(new Date(tweet.created_at));
    let $tweet = $(`<article>
    <header class="tweet-header">
      <p class="profile-pic"><img src = "${tweet.user.avatars}">${tweet.user.name}</p>
      <p class="handle">${tweet.user.handle}</p>
    </header>
    <p class="printed-tweet">${escape(tweet.content.text)}</p>
    <footer class="tweet-footer">
      <p class="date">${created}</p>
      <p class="icons">
        <i class="fa-solid fa-flag" style="color: #1f2551"></i>
        <i class="fa-solid fa-retweet" style="color: #1f2551"></i>
        <i class="fa-solid fa-heart" style="color: #1f2551"></i>
      </p>
    </footer>
    </article>`);

    return $tweet;

  };

    


  $("article").hover(function() {
    $("article").attr("style", "box-shadow: 10px 5px 5px black");
  }, function() {
    $("article").attr("style", null);
  });

  $(".fa-flag").hover(function() {
    $(".fa-flag").attr("style", "color: red");
  }, function() {
    $(".fa-flag").attr("style", "color: #1f2551");
  });

  $(".fa-retweet").hover(function() {
    $(".fa-retweet").attr("style", "color: red");
  }, function() {
    $(".fa-retweet").attr("style", "color: #1f2551");
  });

  $(".fa-heart").hover(function() {
    $(".fa-heart").attr("style", "color: red");
  }, function() {
    $(".fa-heart").attr("style", "color: #1f2551");
  });

  
  $(".error-msg").hide();
    
  $("form").on("submit", function(event) {
    event.preventDefault();
    $(".error-msg").hide();
    if ($("textarea").val().length === 0) {
      $(".error-msg").html("The form is empty. Please type something!");
      $(".error-msg").show();
      return;
    }

    if ($("textarea").val().length > 140) {
      $(".error-msg").html("You have gone over the 140 character limit!");
      $(".error-msg").show();
      return;
    }

    $.post("http://localhost:8080/tweets", $("form").serialize())
        
      .then(()=> loadTweets());
    $("textarea").val("");
  });

  const loadTweets = function() {

    $.get("http://localhost:8080/tweets", function(data) {
      renderTweets(data);
    });
  };

  loadTweets();

});




