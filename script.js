// Grabs the user's desired number of squares
// If the number is lower than 1 or greater than 64, return an error
var error = document.querySelector(".error");

const gridSize = () => {
  var input = number.value;

  if (number.value < 1 || number.value > 64) {
    error.style.display = "";
  } else {
    error.style.display = "none";
    gridLayout(input);
    toggle();
  }
};

// Update grid when user leaves the input box or hits enter
var number = document.querySelector(".number");

number.addEventListener("focusout", gridSize);
number.addEventListener("keydown", (e) => {
  if (e.keyCode === 13) {
    gridSize();
  }
});

const gridLayout = (size) => {
  // Defines number of squares
  const container = document.querySelector(".grid-container");
  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  // Clears the board
  const squares = container.querySelectorAll("div");
  squares.forEach((div) => div.remove());

  // Populates board with user input number
  for (let i = 0; i < size * size; i++) {
    const gridElement = document.createElement("div");
    gridElement.setAttribute("class", "grid");
    container.insertAdjacentElement("beforeend", gridElement);
  }
};

// Hides or shows grid lines
const toggle = () => {
  var toggle = document.querySelector(".lines");
  var line = document.querySelectorAll(".grid");

  const toggleLines = () => {
    for (const lines of line) {
      lines.classList.toggle("grid");
    }
  };

  toggle.addEventListener("click", toggleLines);
};

// Default size of the grid and adds the toggle function
gridLayout(16);
toggle();
