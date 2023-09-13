$(document).ready(function() {
  
  $("#tweet-text").on("keydown", function() {
   const charCounter = $("#tweet-text").siblings().children("output");
   charCounter.val(140 - (this.value.length));
   if (charCounter.val() < 0) {
   charCounter.attr("style", "color: red")
  } else if (charCounter.val() > 0) {
    charCounter.attr("style", "color: black")
  }
    
  })

});

//style ="color: red"