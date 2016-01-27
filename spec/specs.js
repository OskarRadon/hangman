// make array of words for computer to choose from
describe('gameWords', function() {
  it("takes an array of words", function() {
      expect(gameWords.words[0]).to.eql("cat");
      expect(gameWords.words[1]).to.eql("man");
  });
  it("generates random word from words array", function() {
    expect(typeof gameWords.generateWord(gameWords.words)).to.equal("string");
  });
  it("splits chosenword into array of letters", function(){
    expect(typeof gameWords.chosenWord[0]).to.equal("string");
  });
});

// have computer choose random word from array
// display random word as blanks
// make array of letters
// check if letter is in word
// check if game is won
  // add letter to user array
  // check fi user array equals answer array



//jQuery
//user clicks on letters
//word is displayed
