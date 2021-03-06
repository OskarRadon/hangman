function Hangman (words, blankArray) {
  this.words = words;
  this.blankArray = blankArray;
};

var newWord;
var counter = 0;
var newHangman = new Hangman (["array", "internet", "string", "javascript", "html", "programming", "computer", "portland"], []);

Hangman.prototype.generateBlanks = function() {
  var wordIndex = Math.floor(8 * Math.random());
  newWord = this.words[wordIndex].split('');
  for (var i=0; i < newWord.length; i++) {
    this.blankArray.push("_ ");
  }
  console.log(newWord);
};

Hangman.prototype.searchBlanks = function(letterInput) {
  var wrongGuess = newWord.indexOf(letterInput);
  console.log(wrongGuess);
  if (wrongGuess === -1) {
    counter = counter + 1;
  }
  return counter;
};

Hangman.prototype.replaceLetter = function(letterInput) {
  for(var j=0; j < newWord.length; j++) {
    var guess = newWord.indexOf(letterInput, j);
    if (guess !== -1) {
      this.blankArray.splice(guess, 1, letterInput);
    }
  }
};

Hangman.prototype.winState = function() {
  var checkWord = this.blankArray.indexOf("_ ");
  if (checkWord === -1) {
    return true;
  }
};

$(document).ready(function() {
  newHangman.generateBlanks();
  $("#Result").html(newHangman.blankArray);
  $("#letters-div a").click(function(e){
    var letterInput = $(e.target).text();
    newHangman.searchBlanks(letterInput);
    if (counter < 6) {
      $("#myImage").empty();
      $("#myImage").append("<img src='img/" + (counter+1) + ".jpg'>");
    }
    else {
      $(".message").text("You Lose!!!")
      $("#myImage").empty();
      $("#myImage").append("<img src='img/7.jpg'>");
    }
    newHangman.replaceLetter(letterInput);
    var win = newHangman.winState();
    if (win === true) {
      $(".message").text("You Win!!!")
    }
    $("#Result").html(newHangman.blankArray);
  });
  $("form#hangman").submit(function(event) {
    window.location.reload();
    event.preventDefault();
  });
});
