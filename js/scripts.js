var words = ["cat", "internet", "initial", "look", "mat", "yak", "computer", "portland"];
// var counter = 0;  used to check if game is won

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
      for(j=0; j < newWord.length; j++) {
        var guess = newWord.indexOf(letterInput, j);  // put this in a loop
        if (guess !== -1) {
          blankArray.splice(guess, 1, letterInput); //this doesn't work if a word has multiple of the same letter
        }
      }
      $("#Result").html(blankArray);
    });
    event.preventDefault();
  });

});
