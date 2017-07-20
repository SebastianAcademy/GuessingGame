var randomNumber;
var numberOfGuesses = 3;
$("#gameON").hide();
$("#submitBtnGuess").click(makeGuess);
$("#newGameBtn").click(startNewGame);

function startNewGame(){
  $("#gameON").show();
  $("#guess").focus();
  numberOfGuesses = 3;
  randomNumber = Math.floor(Math.random()*10)+1;
  $("#gameInfo").html("<p>You have " + numberOfGuesses + " guesses left!</p>");
}

function makeGuess(){
  var guess = $("#guess").val();
  $("#guess").val("").focus();
  numberOfGuesses = numberOfGuesses - 1;
  $("#showGuess").text(guess);
  guess = parseInt(guess);
  compareGuess(guess);
}

function compareGuess(guess){
  if(numberOfGuesses === 0 && guess != randomNumber){
    $("#gameInfo").html("<p>GAME OVER</p>");
    $("#gameON").hide();
  }
  else{
    if(guess === randomNumber){
      $("#gameInfo").html("<p>Hurray, you got it!</p>");
      $("#gameON").hide();
    }
    else if(guess > randomNumber){
      $("#gameInfo").html("<p>You guessed " + guess + " which is too high.</p>" + "You have " + numberOfGuesses + " guesses left!");
    }
    else{
      $("#gameInfo").html("<p>You guessed " + guess + " which is too low.</p>" + "You have " + numberOfGuesses + " guesses left!");
    }
  }
}
