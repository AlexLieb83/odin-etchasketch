const containerDiv = document.getElementById("container");

const SQUARE_COUNT = 16;
const SQUARE_SIZE = 32;
//how many squares in one row -- based on square_count
const side = Math.sqrt(SQUARE_COUNT);

//container must be this wide to fit the proper square amount per row
//4 squares per row
//each square 32 size
//so width must be 4 * 32 = 128px
containerDiv.style.width = `${side * SQUARE_SIZE}px`;

let squareArr = [];

for (let i = 0; i < SQUARE_COUNT; i++) {
  const squareDiv = document.createElement("div");
  squareDiv.style.width = `${SQUARE_SIZE}px`;
  squareDiv.style.height = `${SQUARE_SIZE}px`;
  squareDiv.style.border = "2px solid black";

  //   squareDiv.classList.add(`square-div-${i}`);

  containerDiv.appendChild(squareDiv);
  squareArr.push(i);

  squareDiv.addEventListener("mouseenter", colorBox);
}

function colorBox(e) {
  e.target.classList.add("color-box");
}
