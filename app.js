let valueOutput = document.querySelector("#range-value");
let sliderValue = document.querySelector("#range-input");

//Default value
valueOutput.textContent = `${sliderValue.value} x ${sliderValue.value}`;

//Getting the current value
sliderValue.addEventListener("input", (e) => {
  valueOutput.textContent = `${e.target.value} x ${e.target.value}`;
  creatingGrid(e.target.value);
});

//This function create the grids
const creatingGrid = (value) => {
  let gridBoard = document.querySelector(".grid-board");
  //Creating the grid
  gridBoard.style.gridTemplateColumns = `repeat(${value}, 1fr)`;
  gridBoard.style.gridTemplateRows = `repeat(${value}, 1fr)`;

  let size = value * value;

  for (let x = 0; x < size; ++x) {
    let createDiv = document.createElement("div");
    createDiv.style.backgroundColor = "#fefefe";
    gridBoard.insertAdjacentElement("beforeend", createDiv);
  }
};

//Default number of grids
creatingGrid(16);
