const divContainer = document.querySelector(".gridContainer");

const color = ["#3C9EE7", "#E7993C", "#E73C99", "#3CE746", "#edfb20", "#fb3620", "#b50ba7"];

function createGrid(size = 16) {
  divContainer.innerHTML = "";

  divContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  divContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  for (let i = 0; i < size * size; i++) {
    const newDiv = document.createElement("div");
    newDiv.classList.add("gridDiv");
    newDiv.addEventListener("mouseover", () => {
      newDiv.style.background = color[Math.floor(Math.random() * color.length)];
    });
    divContainer.appendChild(newDiv);
  }
}

createGrid();

const resultEle = document.querySelector(".result");

document.querySelector(".btnClick").addEventListener("click", () => {
  const res = prompt("Choose number of squares per side. Max size 100.");

  if (res === null) {
    resultEle.innerHTML = "You pressed cancel";
  } else if (!/^[0-9]+$/.test(res) || Number(res) < 1) {
    resultEle.innerHTML = "You didn't enter a valid number";
  } else if (Number(res) > 100) {
    resultEle.innerHTML = "You entered a number greater than 100";
  } else {
    resultEle.innerHTML = "You entered: " + res;
    createGrid(Number(res));
  }
});

document.getElementById("resetBtn").addEventListener("click", clearGrid);

function clearGrid() {
  document.querySelectorAll(".gridDiv").forEach(sq => {
    sq.style.background = "white";
  });
}