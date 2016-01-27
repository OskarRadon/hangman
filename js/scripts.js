var words = ["cat", "man", "hat", "car", "mat", "yak"];
var counter = 0;
var userGuess = [];

function generateWord(words) {  //chooses word from array
  var wordIndex = Math.floor(6 * Math.random());
  return words[wordIndex];
};

function splitWord() {
  var results = generateWord(words).split(''); //splits word into results array of letters
};

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
  $("#letters-div a").click(function(e){
    var letterInput = $(e.target).text();
    userGuess.push(letterInput);
    return userGuess;
  });

});


// gameWords.generateWord(gameWords.words);
// gameWords.prototype.generateWord = function() {
//   var wordIndex = Math.floor(6 * Math.random());
//   return gameWords.words[wordIndex];
// };
