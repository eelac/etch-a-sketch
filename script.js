// Intialize all buttons for colors
const color = document.querySelector(".color");
const rainbow = document.querySelector(".rainbow");
const eraser = document.querySelector(".eraser");
const clear = document.querySelector(".clear");
const colorChange = document.querySelector(".colorWheel");
let colorValue = "black";
let userBtn = "color";

// Color value updates on change
colorChange.addEventListener("change", () => {
  colorValue = colorChange.value;
  return colorValue;
});

// Updates the color depending on user button choice
color.addEventListener("click", () => {
  userBtn = "color";
});
rainbow.addEventListener("click", () => {
  userBtn = "rainbow";
});
eraser.addEventListener("click", () => {
  userBtn = "white";
});

// Clears the board
const resetBoard = () => {
  const container = document.querySelector(".grid-container");
  const squares = container.querySelectorAll("div");
  squares.forEach((div) => (div.style.backgroundColor = "white"));
};

clear.addEventListener("click", resetBoard);

// Click and drag functionality for the grid
let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

// Grabs the user's desired number of squares
// If the number is lower than 1 or greater than 64, return an error
const error = document.querySelector(".error");

const gridSize = () => {
  const input = number.value;

  if (input < 1 || input > 64) {
    error.style.display = "";
  } else {
    error.style.display = "none";
    gridLayout(input);
    toggle();
  }
};

// Update grid when user leaves the input box or hits enter
const number = document.querySelector(".number");

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

    // Changes the background color
    const changeColor = (e) => {
      if (e.type === "mouseover" && !mouseDown) return;
      if (userBtn === "color") {
        gridElement.style.backgroundColor = colorValue;
      } else if (userBtn === "rainbow") {
        gridElement.style.backgroundColor = `hsl(${
          Math.random() * 360
        }, 100%, 50%)`;
      } else if (userBtn === "white") {
        gridElement.style.backgroundColor = "white";
      }
    };

    gridElement.setAttribute("class", "grid");
    container.insertAdjacentElement("beforeend", gridElement);
    gridElement.addEventListener("mouseover", changeColor);
    gridElement.addEventListener("mousedown", changeColor);
  }
};

// Hides or shows grid lines
const toggle = () => {
  const toggle = document.querySelector(".lines");
  const line = document.querySelectorAll(".grid");

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
