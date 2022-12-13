const orangeElement = document.getElementById("orange");
orangeElement.style.display = "flex";
orangeElement.style.flexWrap = "wrap";
orangeElement.style.width = "450px";
let r = Math.floor(Math.random() * 255);
let g = Math.floor(Math.random() * 255);
let b = Math.floor(Math.random() * 255);
let d = Math.floor(Math.random() * 15);

setInterval(function () {
  for (let n = 0; n < 16; n++) {
    const newBox = document.createElement("div");
    orangeElement.appendChild(newBox);
    newBox.style.backgroundColor = `rgb(${r},${g},${b}`;
    newBox.style.border = "solid white 1px";
    newBox.style.width = "100px";
    newBox.style.height = "100px";
    if (d == n) {
      newBox.style.backgroundColor = `rgb(${r - 80},${g},${b}`;
    }
  }
  if (n == 16) {
    clearInterval(stopInterval);
  }
}, 5);
