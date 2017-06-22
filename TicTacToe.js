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

var cellTwo = document.querySelector('#two')

 cellTwo.addEventListener('click',function() {
   if (cellTwo.textContent === '') {
     cellTwo.textContent = 'X';
   }else if (cellTwo.textContent === 'X') {
     cellTwo.textContent = 'O';
   }else {
     cellTwo.textContent = '';
   }
 })

var cellThree = document.querySelector('#three')

 cellThree.addEventListener('click',function() {
   if (cellThree.textContent === '') {
     cellThree.textContent = 'X';
   }else if (cellThree.textContent === 'X') {
     cellThree.textContent = 'O';
   }else {
     cellThree.textContent = '';
   }
 })

// FOR LOOP TO ADD EVENT LISTENERS TO ALL THE SQUARES
for (var i = 0; i < squares.length; i++) {
  squares[i].addEventListener('click', changeMarker)
}
