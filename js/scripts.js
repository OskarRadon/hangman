function Hangman (words, counter, blankArray) {
  this.words = words;
  this.counter = counter;
  this.blankArray = blankArray;
};
var newWord;
var newHangman = new Hangman (["cat", "internet", "initial", "look", "mat", "yak", "computer", "portland"], 0, []);

Hangman.prototype.generateBlanks = function() {
  var wordIndex = Math.floor(8 * Math.random());
  newWord = newHangman.words[wordIndex].split('');
  for (var i=0; i < newWord.length; i++) {
    newHangman.blankArray.push("_ ");
  }
};

Hangman.prototype.searchBlanks = function(letterInput) {
  var wrongGuess = newWord.indexOf(letterInput);
  if (wrongGuess === -1) {
    newHangman.counter = newHangman.counter + 1;
    return true;
    if (newHangman.counter > 6) {
      return false;
    }
  }
};

Hangman.prototype.replaceLetter = function() {
  for(var j=0; j < newWord.length; j++) {
    var guess = newWord.indexOf(letterInput, j);
    if (guess !== -1) {
      blankArray.splice(guess, 1, letterInput);
    }
  }
};

Hangman.prototype.winState = function() {
  var checkWord = newHangman.blankArray.indexOf("_ ");
  if (checkWord === -1) {
    return true;
  }
};





$(document).ready(function() {
  newHangman.generateBlanks();
  $("#Result").html(newHangman.blankArray);

  $("#letters-div a").click(function(e){
    var letterInput = $(e.target).text();
    var search = newHangman.searchBlanks(letterInput);
    if (newHangman.searchBlanks(letterInput) === true) {
      $("#myImage").empty();
      $("#myImage").append("<img src='img/" + (newHangman.counter+1) + ".jpg'>");
    } else {
      $("#myImage").empty();
      $("#myImage").append("<img src='img/7.jpg'>");
    }
    if (newHangman.counter === 6) {
      $(".message").text("You Lose!!!")
    }
      // for(var j=0; j < newWord.length; j++) {
      //   var guess = newWord.indexOf(letterInput, j);
      //   if (guess !== -1) {
      //     blankArray.splice(guess, 1, letterInput);
      //   }
      // }
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
