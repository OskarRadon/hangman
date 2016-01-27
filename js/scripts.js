var words = ["cat", "man", "hat", "car", "mat", "yak"];
var chosenWord = [];

function generateWord(words) {
  var wordIndex = Math.floor(6 * Math.random());
  return words[wordIndex];
};

function splitWord(word) {
  var split = gameWords.generateWord(gameWords.words).split();
  chosenWord.push(split);
  return chosenWord;
};


// gameWords.generateWord(gameWords.words);
// gameWords.prototype.generateWord = function() {
//   var wordIndex = Math.floor(6 * Math.random());
//   return gameWords.words[wordIndex];
// };
