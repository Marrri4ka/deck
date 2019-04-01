$(document).ready(function(){
  $(".btn").click(function(){
    var suits = ["clubs", "diamonds", "hearts", "spades"];
    var ranks = ["2", "3", "4","5","6","7","8","9","10","jack","queen","king","ace"];
    // var deck = [];
    suits.forEach(function(rank) {
      ranks.forEach(function(suit) {
        // deck=rank+suit
        $("ul").append("<li>" + suit  +" of " + rank + "</li>");
        // console.log(deck);
      });
    });




  });
});
