var words = ["cat", "internet", "initial", "look", "mat", "yak", "computer", "portland"];
var counter = 0;
function generateWord() {  //chooses word from array
  var wordIndex = Math.floor(9 * Math.random());
  return words[wordIndex].split('');
};

function compareWords() {
  var arrayContainsLetter = (results.indexOf("a") > -1); //if user input is in results array = true
  counter += 1;
  return arrayContainsLetter;
}

// function checkState() {
//   var gameState;
//   if ((counter < 7) && (userGuess === results)) {
//   gameState = "win";
//   } else if ((counter < 7) && (userGuess != results)) {
//   // do nothing
//   } else {
//   gameState = "loss";
//   }
// }

$(document).ready(function() {
  $("form#hangman").submit(function(event) {
    var blankArray = [];
    var newWord = generateWord(words);
    console.log(newWord); // open the console to see the answer (to test)
    for (i=0; i < newWord.length; i++) {
      blankArray.push("_ ");
    }
    $("#Result").html(blankArray);
    $("#letters-div a").click(function(e){
      var letterInput = $(e.target).text();
      var wrongGuess = newWord.indexOf(letterInput);
      if (wrongGuess === -1) {
        counter = counter + 1;
        console.log(counter);
      }
      if (counter === 6) {
        console.log("You Lose!");
      }
      for(j=0; j < newWord.length; j++) {
        var guess = newWord.indexOf(letterInput, j);
        if (guess !== -1) {
          blankArray.splice(guess, 1, letterInput);
        }
      }
      return counter;
      $("#Result").html(blankArray);
    });
    event.preventDefault();
  });

});
