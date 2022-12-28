let btn = document.getElementById("btn");
let root = document.getElementById("root");
root.style.display = "flex";
root.style.gap = "20px";
root.style.flexWrap = "wrap";

btn.addEventListener("click", () => {
  root.innerHTML = "";
  fetch("http://localhost:3333/api/cars")
    .then((res) => res.json())
    .then((res) => {
      res.map((car) => {
        let newCard = document.createElement("div");
        newCard.innerHTML = `<div class="card" style="width: 18rem;">
            <img src="${car.Image}" class="card-img-top" style="width:100%; height: 190px" alt="...">
            <div class="card-body" style="display:flex; flex-direction: column; justify-content: space-between;">
              <h5 class="card-title">${car.model}</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary" style="margin-right: auto">Go somewhere</a>
            </div>
          </div>
            `;
        root.appendChild(newCard);
      });
    })
    .catch((e) => console.log("e: ", e));
});
