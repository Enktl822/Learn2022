document.getElementById("root").innerHTML =
  " <div class='darkmode'> <h1> Darkmode</h1></div> ";
document.getElementsByClassName("dummy")[0].innerHTML = "<h1> Pineapple </h1>";
document.getElementsByClassName("dummy")[1].innerText = "Apple";
document.getElementsByClassName("dummy")[1].style.backgroundColor = "blue";
document.getElementsByClassName("dummy")[1].style.color = "white";

// -------------------------------------------------------------------------------------

// const newDiv = document.createElement("Blah");
// const newContent = document.createTextNode("hmmm");
// newDiv.appendChild(newContent);
// const main = document.getElementsByTagName("main");
// main[0].appendChild(newDiv);

const newDiv = document.createElement("h1");
const newContent = document.createTextNode("Манай сайтад тавтай морил");
newDiv.appendChild(newContent);
const main = document.getElementsByTagName("main");
main[0].appendChild(newDiv);

//  -------------------------------------------------------------------------------------

// let rootElement = document.getElementById("root");
let ulElement = document.createElement("ul");
rootElement.appendChild(ulElement);

for (let i = 0; i < 100; i++) {
  let liElement = document.createElement("li");
  liElement.innerText = i.toString();
  ulElement.appendChild(liElement);
}

// -----------------------------------------shatar---------------------------------------

let rootElement = document.getElementById("root");
rootElement.style.direction = "flex";
rootElement.style.flexWrap = "wrap";
rootElement.style.width = "850px";

// 2 for loop ashiglav

for (let p = 0; p < 8; p++) {
  for (let j = 0; j < 8; j++) {
    let newDiv = document.createElement("div");
    rootElement.appendChild(newDiv);
    newDiv.style.width = "100px";
    newDiv.style.height = "100px";
    newDiv.style.border = "1px solid black";
    if ((p + j) % 2 == 0) {
      newDiv.style.backgroundColor = "grey";
    }
  }
}
//  1 for loop ashiglav

for (let p = 0; p < 64; p++) {
  let newDiv = document.createElement("div");
  rootElement.appendChild(newDiv);
  newDiv.style.width = "100px";
  newDiv.style.height = "100px";
  newDiv.style.border = "1px solid black";
  if ((p + (Math.floor(p / 8) % 2)) % 2 == 0) {
    newDiv.style.backgroundColor = "grey";
  }
}

// --------------------------------------time--------------------------------------------

let rootElement = document.getElementById("root");

let p = 0;

const myInterval = setInterval(function () {
  i++;
  rootElement.innerText = i;
  console.log(i);
  if (i == 10) {
    clearInterval(myInterval);
  }
}, 100);

let name = "enne";
let welcomeMessage = `${p}px`;

// ---------------------------------------------------------------------------------------

// appendchild -> apend - nemeh
// inner.Text -> dotor ni yu baih ni hamaagui oruulsan uutga l baina.
