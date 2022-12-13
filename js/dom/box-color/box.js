const orangeElement = document.getElementById("orange");
orangeElement.style.display = "flex";
orangeElement.style.flexWrap = "wrap";
orangeElement.style.width = "450px";

for (let n = 0; n < 16; n++) {
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);
  const newBox = document.createElement("div");
  orangeElement.appendChild(newBox);
  newBox.style.backgroundColor = `rgb(${r},${g},${b}`;
  newBox.style.border = "solid black 1px";
  newBox.style.width = "100px";
  newBox.style.height = "100px";
}
