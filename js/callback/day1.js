// let curRoot = document.getElementById("root");
// let curBody = document.querySelector("body");

// const doThis = () => {
//   console.log("scrolling");
// };

// function innerHeight() {}

window.addEventListener("scroll", () => {
  let percent = Math.floor(
    (window.scrollY * 100) /
      (document.querySelector("body").clientHeight - window.innerHeight)
  );
  document.querySelector("#boot").innerText = `${percent}%`;
});

// function greeting(name) {
//   alert(`Hello, ${name}`);
// }

// function greetings(callback) {
//   const name = prompt("Please enter your name !!");
//   callback(name);
// }

// greetings(greeting);
