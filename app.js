//*Selectors
let valueOutput = document.querySelector("#range-value");
let sliderValue = document.querySelector("#range-input");
let clearBtn = document.querySelector(".clear-btn");
let gridBoard = document.querySelector(".grid-board");

//*FUNCTIONS
const hoverGrid = ( hovering ) => {
  hovering.addEventListener('mouseover', () => {
    hovering.style.backgroundColor = 'black';
  });
}

//Function to clear the div
const clearDiv = ( rmDiv ) => {
  let removeDiv = rmDiv.querySelectorAll('div');
  removeDiv.forEach( ( rm ) => { rm.style.backgroundColor = "#fefefe" } )
}

//This function create the grids
const creatingGrid = ( value, isRemove ) => {
  let size = value * value;
  //Creating the grid
  gridBoard.style.gridTemplateColumns = `repeat(${ value }, 1fr)`;
  gridBoard.style.gridTemplateRows = `repeat(${ value }, 1fr)`;

  if ( isRemove ) {
    clearDiv( gridBoard );
  }

  for (let x = 0; x < size; ++x) {
    let createDiv = document.createElement("div");
    createDiv.style.backgroundColor = "#fefefe";
    hoverGrid( createDiv );
    gridBoard.appendChild(createDiv);
  }
};

//*DEFAULT BEHAVIOURS
//Default value
valueOutput.textContent = `${ sliderValue.value } x ${ sliderValue.value }`;
//Default number of grids
creatingGrid(16, false);

//*EVENTLISTENERS
//Getting the current value
sliderValue.addEventListener("input", ( e ) => {
  valueOutput.textContent = `${ e.target.value } x ${ e.target.value }`;
  creatingGrid( e.target.value, true );
});
clearBtn.addEventListener('click', () => clearDiv( gridBoard ) );



