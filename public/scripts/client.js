/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


$(document).ready(function() {

  

// Fake data taken from initial-tweets.json
  const data = [
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png"
        ,
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd" },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    }
  ]

  const renderTweets = function(tweets) {
  // loops through tweets

    for (let tweet of tweets) {
    // calls createTweetElement for each tweet
    let $tweet = createTweetElement(tweet);

    // takes return value and appends it to the tweets container
    $('.tweet-container').append($tweet);
    }
  }

  
  
  const createTweetElement = function(tweet) {
    console.log(tweet.created_at);
    const created = timeago.format(new Date(tweet.created_at))
    let $tweet = $(`<article>
    <header class="tweet-header">
      <p class="profile-pic"><img src = "${tweet.user.avatars}">${tweet.user.name}</p>
      <p class="handle">${tweet.user.handle}</p>
    </header>
    <p class="printed-tweet">${tweet.content.text}</p>
    <footer class="tweet-footer">
      <p class="date">${created}</p>
      <p class="icons">
        <i class="fa-solid fa-flag" style="color: #1f2551"></i>
        <i class="fa-solid fa-retweet" style="color: #1f2551"></i>
        <i class="fa-solid fa-heart" style="color: #1f2551"></i>
      </p>
    </footer>
    </article>`)

    return $tweet;

  }

    //renderTweets(data);


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


    
    $("form").on("submit", function (event) {
      event.preventDefault();
      if ($("textarea").val().length === 0) {
        alert("Your form is empty")
        return;
      } 

      if ($("textarea").val().length > 140) {
        alert("Too many characters")
        return;
      }

      $.post("http://localhost:8080/tweets", $("form").serialize())
        .then(()=> loadTweets())
      
      
    });

  const loadTweets = function () {

    $.get("http://localhost:8080/tweets", function (data) {
      console.log(data)
      renderTweets(data);
    })
  }

  

});




