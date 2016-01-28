function Hangman (words, counter) {
  this.words = words;
  this.counter = counter;
  this.blankArray = blankArray;
}

Hangman.prototype.generateWord() {  //chooses word from array
  var wordIndex = Math.floor(8 * Math.random());
  return words[wordIndex].split('');
};

Hangman.prototype.generateBlanks() {
  var newWord = Hangman.generateWord(Hangman.words);
  for (var i=0; i < newWord.length; i++) {
    blankArray.push("_ ");
  }
};

Hangman.prototype.searchBlanks(letterInput) {
  var wrongGuess = newWord.indexOf(letterInput);
  if (wrongGuess === -1) {
    counter = counter + 1;
    return true;
    if (counter > 6) {
      return false;
    }
  }
}

Hangman.prototype.replaceLetter() {
  for(var j=0; j < newWord.length; j++) {
    var guess = newWord.indexOf(letterInput, j);
    if (guess !== -1) {
      blankArray.splice(guess, 1, letterInput);
    }
  }
}

Hangman.counter = 0;
Hangman.blankArray = [];
Hangman.words = ["cat", "internet", "initial", "look", "mat", "yak", "computer", "portland"];

$(document).ready(function() {
  Hangman.generateWord(Hangman.words);
  Hangman.generateBlanks(Hangman.words);
  $("#Result").html(blankArray);

  $("#letters-div a").click(function(e){
    var letterInput = $(e.target).text();
    if (Hangman.searchBlanks(letterInput) === true) {
      $("#myImage").empty();
      $("#myImage").append("<img src='img/" + (counter+1) + ".jpg'>");
    } else {
      $("#myImage").empty();
      $("#myImage").append("<img src='img/7.jpg'>");
    }
    if (counter === 6) {
      $(".message").text("You Lose!!!")
    }
      // for(var j=0; j < newWord.length; j++) {
      //   var guess = newWord.indexOf(letterInput, j);
      //   if (guess !== -1) {
      //     blankArray.splice(guess, 1, letterInput);
      //   }
      // }
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
