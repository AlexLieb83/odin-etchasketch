const containerDiv = document.getElementById("container");
const customizeGridBtn = document.getElementById("customize-grid-btn");

const CONTAINER_WIDTH = 640; //based on css container width

let squareCount = 16; // default 4x4 grid

let squareArr = [];

function buildGrid(squares) {
  for (let i = 0; i < squares; i++) {
    const squareDiv = document.createElement("div");

    //calc width per square -- 100% width / 16
    const squareSize = CONTAINER_WIDTH / Math.sqrt(squares);

    squareDiv.style.width = `${squareSize}px`;
    squareDiv.style.height = `${squareSize}px`;
    squareDiv.style.border = "2px solid black";

    containerDiv.appendChild(squareDiv);
    squareArr.push(i);

    squareDiv.addEventListener("mouseenter", colorBox);
  }
}
buildGrid(squareCount);

function colorBox(e) {
  // 0 - 255
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  const color = `rgb(${red}, ${green}, ${blue})`;

  e.target.style.backgroundColor = color;
  console.log(color);
}

customizeGridBtn.addEventListener("click", promptSquaresPerRow);

//user clicks button
function promptSquaresPerRow() {
  let squaresPerRow = parseInt(
    prompt("How many squares per row would you like for your grid?")
  );

  while (squaresPerRow > 100) {
    squaresPerRow = prompt(
      "Invalid entry. Must be 100 squares per row or less. How many squares per row would you like for your grid?"
    );
  }

  clearContainer();

  let totalSquares = squaresPerRow * squaresPerRow;

  buildGrid(totalSquares);
}

//clear the container
function clearContainer() {
  containerDiv.replaceChildren();
}
