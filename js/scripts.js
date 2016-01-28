function WordMaker(words) {
  this.words = words;
}

WordMaker.prototype.generateWord = function() {  //chooses word from array
  var wordIndex = Math.floor(8 * Math.random());
  return this.words[wordIndex].split('');
};

$(document).ready(function() {
    var counter = 0;
    var blankArray = [];
    var newWord = new WordMaker(["cat", "internet", "initial", "look", "mat", "yak", "computer", "portland"]);
    newWord.generateWord();
    for (var i=0; i < newWord.length; i++) {
      blankArray.push("_ ");
    }
    $("#Result").html(blankArray);
    $("#letters-div a").click(function(e){
      var letterInput = $(e.target).text();
      var wrongGuess = newWord.indexOf(letterInput);
      if (wrongGuess === -1) {
        counter = counter + 1;
        $("#myImage").empty();
        $("#myImage").append("<img src='img/" + (counter+1) + ".jpg'>");
        if (counter > 6) {
          $("#myImage").empty();
          $("#myImage").append("<img src='img/7.jpg'>");
        }
      }
      if (counter === 6) {
        $(".message").text("You Lose!!!")
      }
      for(var j=0; j < newWord.length; j++) {
        var guess = newWord.indexOf(letterInput, j);
        if (guess !== -1) {
          blankArray.splice(guess, 1, letterInput);
        }
      }
      var checkWord = blankArray.indexOf("_ ");
      if (checkWord === -1) {
        $(".message").text("You Win!!!")
      }
      $("#Result").html(blankArray);
    });
    $("form#hangman").submit(function(event) {
        window.location.reload();
        event.preventDefault();
    });
});
