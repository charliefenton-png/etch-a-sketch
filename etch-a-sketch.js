const divContainer = document.querySelector(".gridContainer");

function createGrid() {
  for (let i = 0; i < 256; i++) {
  const newDiv = document.createElement("div");
  divContainer.appendChild(newDiv);

  }
}

createGrid()
