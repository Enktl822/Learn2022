setInterval(
  fetch("")
    .then((fact) => fact.json())
    .then(doingSomething)
    .catch((error) => console.error(error)),
  1000
);
let count = 0;
async function doingSomething() {
  console.log(data.bpi.USD.rate);
  count++;
  let too = data.bpi.USD.rate;
  too = too.split(",");
  too = parseFloat(too);
  if (too < 16775.4143) {
    document.getElementById(
      "root"
    ).innerHTML = `<h1>purchase bitcoin ${count} </h1>`;
  } else {
    document.getElementById(
      "root"
    ).innerHTML = `<h1>wait a little bit ${count} </h1>`;
  }
}
