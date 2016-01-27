var words = ["cat", "man", "hat", "car", "mat", "yak"];
var counter = 0;
var userGuess = [];
var results = [];

function generateWord(words) {  //chooses word from array
  var wordIndex = Math.floor(6 * Math.random());
  return words[wordIndex].split('');
};

// function splitWord() {
//   var results = generateWord(words).split(''); //splits word into results array of letters
// };

function compareWords() {
  var arrayContainsLetter = (results.indexOf("a") > -1); //if user input is in results array = true
  counter += 1;
  return arrayContainsLetter;
}

function checkState() {
  var gameState;
  if ((counter < 7) && (userGuess === results)) {
  gameState = "win";
  } else if ((counter < 7) && (userGuess != results)) {
  // do nothing
  } else {
  gameState = "loss";
  }
}

$(document).ready(function() {
  $("form#hangman").submit(function(event) {
  var blankArray = [];
  var newWord = generateWord(words);
  console.log(newWord);
  for (i=0; i < newWord.length; i++) {
    blankArray.push("_ ");
  }
  $("#Result").html(blankArray);
  $("#letters-div a").click(function(e){
    var letterInput = $(e.target).text();
    var guess = newWord.indexOf(letterInput);
    if (guess !== -1) {
      blankArray.splice(guess, 1, letterInput);
      $("#Result").html(blankArray);
    };
  });
  event.preventDefault();
 });
});


// gameWords.generateWord(gameWords.words);
// gameWords.prototype.generateWord = function() {
//   var wordIndex = Math.floor(6 * Math.random());
//   return gameWords.words[wordIndex];
// };
