var words = ["cat", "internet", "initial", "look", "mat", "yak", "computer", "portland"];

function generateWord() {  //chooses word from array
  var wordIndex = Math.floor(8 * Math.random());
  return words[wordIndex].split('');
};

$(document).ready(function() {


    var counter = 0;
    var blankArray = [];
    var newWord = generateWord(words);
    console.log(newWord); // open the console to see the answer (to test)
    for (var i=0; i < newWord.length; i++) {
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
      for(var j=0; j < newWord.length; j++) {
        var guess = newWord.indexOf(letterInput, j);
        if (guess !== -1) {
          blankArray.splice(guess, 1, letterInput);
        }

      }
      var checkWord = blankArray.indexOf("_ ");
      if (checkWord === -1) {
        console.log("You Win!");
      }
      $("#Result").html(blankArray);

    });
    $("form#hangman").submit(function(event) {
        window.location.reload();
        event.preventDefault();
    });

});
