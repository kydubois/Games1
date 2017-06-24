// ASSIGN PAYER COLORS
var playerOne = prompt('Player One: Enter Your Name, you will be Blue');
var playerOneColor = 'rgb(0, 0, 255)';

var playerTwo = prompt('Player Two: Enter Your Name, you will be Red');
var playerTwoColor = 'rgb(255, 0, 0)';

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
    if (colorReport === 'rgb(153, 153, 153)') {
      return row
    }
  }
}

//  CHECK TO SEE IF 4 INPUTS ARE THE SAME COLOR
function colorMatch(one, two, three, four) {
  return (one === two && one === three && one === four && one !== 'rgb(153, 153, 153)' && one !== undefined);
}

// CHECK FOR HORIZONTAL WINS
function horizontalWin() {
  for (var row = 0; row < 6; row++) {
    for (var col = 0; col < 4; col++) {
      if (colorMatch(reportColor(row, col), reportColor(row, col + 1), reportColor(row, col + 2), reportColor(row, col + 3))) {
        console.log('horiz');
        reportWin(row, col);
        return true;
      }else {
        continue;
      }
    }
  }
}

// CHECK FOR VERTICAL WINS
function verticalWin() {
  for (var col = 0; col < 7; col++) {
    for (var row = 0; row < 3; row++) {
      if (colorMatch(reportColor(row, col), reportColor(row + 1, col), reportColor(row + 2, col), reportColor(row + 3, col))) {
        console.log('vertical');
        reportWin(row, col);
        return true;
      }else {
        continue;
      }
    }
  }
}

// CHECK FOR DIAGONAL WINS
function diagonalWin() {
  for (var col = 0; col < 5; col++) {
    for (var row = 0; row < 7; row++) {
      if (colorMatch(reportColor(row, col), reportColor(row + 1, col + 1) ,reportColor(row + 2, col + 2), reportColor(row + 3, col + 3))) {
        console.log('diag');
        reportWin(row, col);
        return true;
      }else if (colorMatch(reportColor(row, col), reportColor(row - 1, col + 1) ,reportColor(row - 2, col + 2), reportColor(row - 3, col + 3))) {
        console.log('diag');
        reportWin(row, col);
        return true;
      }else {
        continue;
      }
    }
  }
}


// START WITH PLAYER ONE
var currentPlayer = 1;
var currentName = playerOne;
var currentColor = playerOneColor;

$('h3').text(playerOne + ": it is your turn, please pick a column to drop your blue chip.");

$('.board button').on('click', function() {
  // RECOGNIZE WHAT COLOMN WAS PICKED
  var col = $(this).closest('td').index();
  
  // RETURN BOTTOM AVAILABLE ROW
  var bottomAvailable = checkBottom(col);
  
  // DROP CHIP IN THE COLOMN TO THE BOTTOM AVAILABLE ROW
  changeColor(bottomAvailable, col, currentColor)
  
  // CHECK IF WIN OR TIE
  if (horizontalWin() || verticalWin() || diagonalWin()) {
    $('h1').text(currentName + "you have won!")
    $('h3').fadeOut('fast');
    $('h2').fadeOut('fast');
  }
  
  // CONTINUE TO NEXT PLAYER
  currentPlayer = currentPlayer * -1;
  
  // CHANGE PLAYER TURN
  if (currentPlayer === 1) {
    currentName = playerOne;
    $('h3').text(currentName + ": it is your turn");
    currentColor = playerOneColor;
  }else {
    currentName = playerTwo;
    $('h3').text(currentName + ": it is your turn");
    currentColor = playerTwoColor;
  }
})
