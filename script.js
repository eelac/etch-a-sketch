const gridLayout = (size) => {
  const container = document.querySelector(".grid-container");
  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  for (let i = 0; i < size * size; i++) {
    const gridElement = document.createElement("div");
    gridElement.setAttribute("class", "grid");
    container.insertAdjacentElement("beforeend", gridElement);
  }
};

gridLayout(12);
