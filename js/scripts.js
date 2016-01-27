var gameWords = {
  words: ["cat", "man", "hat", "car", "mat", "yak"],
  generateWord: function(words) {
    var wordIndex = Math.floor(6 * Math.random());
    return words[wordIndex];
  },
};

gameWords.generateWord(words);
// gameWords.prototype.generateWord = function() {
//   var wordIndex = Math.floor(6 * Math.random());
//   return gameWords.words[wordIndex];
// };
