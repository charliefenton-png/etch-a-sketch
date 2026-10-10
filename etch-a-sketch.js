const divContainer = document.querySelector(".gridContainer");

let color = ["#3C9EE7", "#E7993C",
            "#E73C99", "#3CE746", "#edfb20", "#fb3620", "#b50ba7"];

function createGrid() {
  for (let i = 0; i < 256; i++) {
    const newDiv = document.createElement("div");

    newDiv.addEventListener("mouseover", function () {
      newDiv.style.background = color[Math.floor(Math.random() * color.length)];
    });

    divContainer.appendChild(newDiv);
  }
}

createGrid();



function newGridBtn() {
const gridButton = document.querySelector(".btnClick");
  gridButton.addEventListener("click", function())
}