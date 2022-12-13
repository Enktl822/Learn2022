let count = 0;
let count2 = 20;
let count3 = 0;

let stopInterval = setInterval(function () {
  count++;

  document.querySelector("#pine").style.width = `${count}px`;

  if (count == 300) {
    clearInterval(stopInterval);
  }
}, 5);

document.getElementsByClassName("apple")[0].innerHTML = "Apple";
document.getElementById("pine").style.backgroundColor = `rgb(${count3}, 64, 0)`;
document.querySelector("#pine").style.border = "2px solid black";
document.querySelector(".apple").style.color = "white";
document.querySelector("#pine").style.width = `${count}px`;
document.querySelector("#pine").style.height = `${count2}px`;
document.getElementsByTagName;

let counte = 0;
setInterval(startInterval, 1000);
function startInterval() {
  console.log(counte);
  counte++;
}
