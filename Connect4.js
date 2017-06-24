// ASSIGN PAYER COLORS
var playerOne = prompt('Player One: Enter Your Name, you will be Blue');
var playerOneColor = 'blue';

var playerTwo = prompt('Player Two: Enter Your Name, you will be Red');
var playerTwoColor = 'red';

var game_on = true;
var table = $('table tr');

function reportWin(rowNum, colNum) {
  console.log("You won starting at this row,col");
  console.log(rowNum);
  console.log(colNum);
}

// CHANGE THE COLOR OF A BUTTON
function changeColor(rowIndex, colIndex, color) {
  return table.eq(rowIndex).find('td').eq(colIndex).find('button').css('background-color', color);
}

// INDICATE THE CURRENT COLOR OF A BUTTON
function reportColor(rowIndex, colIndex) {
  return table.eq(rowIndex).find('td').eq(colIndex).find('button').css('background-color');
}

// TAKE IN A COLUMN INDEX, RETURNS THE BOTTOM ROW THAT IS STILL GRAY
function checkBottom(colIndex) {
  var colorReport = returnColor(5, colIndex);
  for (var row = 5; row > -1; row--) {
    colorReport = returnColor(row, colIndex);
    if (colorReport === 'gray') {
      return row
    }
  }
}

//  CHECK TO SEE IF 4 INPUTS ARE THE SAME COLOR
function colorMatch(one, two, three, four) {
  return (one === two && one === three && one === four && one !== 'gray' && one !== undefined);
}


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
