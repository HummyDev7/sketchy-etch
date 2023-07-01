let gridBoard = document.querySelector('.grid-board');
//Creating the grid
gridBoard.style.gridTemplateColumns = "repeat(16, 1fr)";
gridBoard.style.gridTemplateRows= "repeat(16, 1fr)";

for ( let x = 0; x < 256; ++x ) {
  let createDiv = document.createElement('div');
  createDiv.style.backgroundColor = '#fefefe';
  gridBoard.insertAdjacentElement('beforeend', createDiv);
}