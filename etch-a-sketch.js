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

      let resultEle = document.querySelector(".result");
        
        document.querySelector(".btnClick").addEventListener("click", () => {
            let res = prompt("Enter your message:", "Choose size of grid, max sixe 100.");
            
            if (res === null) {
                resultEle.innerHTML = "You pressed cancel";
            } else if (res === "") {
                resultEle.innerHTML = "You didn't enter a number";
            } 
             else if (!/^[0-9]+$/.test(res)) {
                resultEle.innerHTML = "You didn't enter a number";
            }
              else if (res > 100) {
                resultEle.innerHTML = "You entered number greater than 100";
            }
             else {
                resultEle.innerHTML = "You entered: " + res;
            }
        });

