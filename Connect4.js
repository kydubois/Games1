// ASSIGN PAYER COLORS
var playerOne = prompt('Player One: Enter Your Name, you will be Blue');
var playerOneColor = 'blue';

var playerTwo = prompt('Player Two: Enter Your Name, you will be Red');
var playerTwoColor = 'red';


// START WITH PLAYER ONE
var currentPlayer = 1;
var currentName = playerOne;
var currentColor = playerOneColor;

$('h3').text(playerOne + ": it is your turn, please pick a column to drop your blue chip.");

$('.board button').on('click', function() {
  // RECOGNIZE WHAT COLOMN WAS PICKED
  
  // RETURN BOTTOM AVAILABLE ROW
  
  // DROP CHIP IN THE COLOMN TO THE BOTTOM AVAILABLE ROW
  
  // CHECK IF WIN OR TIE
  
  // CONTINUE TO NEXT PLAYER
  currentPlayer = (currentPlayer * -1);
  // CHANGE PLAYER TURN
  if(currentPlayer === 1) {
    currentName = playerOne;
    $('h3').text(playerOne + ": it is your turn, please pick a column to drop your blue chip.");
    currentColor = playerOneColor;
  }else {
    currentName = playerTwo;
    $('h3').text(playerTne + ": it is your turn, please pick a column to drop your red chip.");
    currentColor = playerTneColor;
  }
})
