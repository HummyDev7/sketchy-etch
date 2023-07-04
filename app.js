//*Selectors
let valueOutput = document.querySelector("#range-value");
let sliderValue = document.querySelector("#range-input");
let clearBtn = document.querySelector(".clear-btn");
let gridBoard = document.querySelector(".grid-board");
let mode = document.querySelectorAll('.mode');
let selectedColor = document.querySelector('#color-input');

//*global variables
let selectedMode;
let colorSelected = "#2a2438";
let mouseDown = false;
 
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

//*FUNCTIONS

const selectMode = ( select ) => { selectedMode = select; };

const color = ( selectColor ) => { colorSelected = selectColor };

const spectrumMode = function( targetDiv ) {
  let randomColor = Math.floor(Math.random() * 16777215).toString(16).toUpperCase();
  targetDiv.style.backgroundColor = `#${ randomColor }`;
}

const classicMode = function( targetDiv ) { targetDiv.style.backgroundColor = colorSelected; };

const eraserMOde = function( targetDiv ) { targetDiv.style.backgroundColor = "#fefefe"; };

const darkeningMode = function( targetDiv ) { 
  
    if ( targetDiv.style.backgroundColor.match( /rgba/ ) ) {
      let currentOpacity = Number(targetDiv.style.backgroundColor.slice(-4, -1));
      
      if ( currentOpacity <= 0.9 ) {
          targetDiv.style.backgroundColor = `rgba(0, 0, 0, ${currentOpacity + 0.1})`;
      }

  } else if (targetDiv.classList == 'gray' && targetDiv.style.backgroundColor == 'rgb(0, 0, 0)') {
      return;
      
  } else {
      targetDiv.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';  
  }
}

const activateMode = function(e) {

  if (e.type === 'mouseover' && !mouseDown) return;
  switch( selectedMode ) {

    case 'classic':
      classicMode( this );
      break;

    case 'spectrum':
      spectrumMode( this );
      break;

    case 'darkening':
      darkeningMode( this );
      break;

    case 'eraser':
      eraserMOde( this );
      break;
  }
};
//Function to clear the div
const clearDiv = ( rmDiv ) => {
  let removeDiv = rmDiv.querySelectorAll('div');
  removeDiv.forEach( ( rm ) => { rm.style.backgroundColor = "#fefefe" } );
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
    createDiv.addEventListener('mouseover', activateMode);
    createDiv.addEventListener('mousedown', activateMode);
    gridBoard.insertAdjacentElement("beforeend", createDiv);
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

mode.forEach( ( modes ) => {

  modes.addEventListener('click', ( e ) => {
    selectMode( e.target.value );
  });
});

selectedColor.addEventListener('input', function( e ) {
  color( e.target.value );
});
