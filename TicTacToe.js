// RESTART GAME BUTTON
var restart = document.querySelector('#b')

// GRABS ALL THE SQUARES
var squares = document.querySelectorAll('td')

// CLEAR ALL THE SQUARES
function clearBoard() {
  for (var i = 0; i < squares.length; i++) {
    squares[i].textContent = '';
  }
}

restart.addEventListener('click', clearBoard);


// CHECK THE SQUARE MARKER
var cellOne = document.querySelector('#one')

 cellOne.addEventListener('click',function() {
   if (cellOne.textContent === '') {
     cellOne.textContent = 'X';
   }else if (cellOne.textContent === 'X') {
     cellOne.textContent = 'O';
   }else {
     cellOne.textContent = '';
   }
 })



// FOR LOOP TO ADD ECENT LISTENERS TO ALL THE SQUARES
for (var i = 0; i < squares.lenght; i++) {
  squares[i].addEventListener('click', changeMarker)
}
