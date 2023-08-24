var number = document.querySelector(".number");

// Grabs the user's desired number of squares
const gridSize = () => {
  var input = number.value;
  gridLayout(input);
};

const gridLayout = (size) => {
  // Defines number of squares
  const container = document.querySelector(".grid-container");
  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  // Clears the board
  let board = document.querySelector(".grid-container");
  let squares = board.querySelectorAll("div");
  squares.forEach((div) => div.remove());

  // Populates board with user input number
  for (let i = 0; i < size * size; i++) {
    const gridElement = document.createElement("div");
    gridElement.setAttribute("class", "grid");
    container.insertAdjacentElement("beforeend", gridElement);
  }
};

// Update grid when user leaves the input box or hits enter
number.addEventListener("focusout", gridSize);
number.addEventListener("keydown", (e) => {
  if (e.keyCode === 13) {
    gridSize();
  }
});

// Default size of the grid
gridLayout(16);
