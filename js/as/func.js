async function fryEgg() {
  return 10;
}

let result = fryEgg();
console.log(result);

let abc;
result.then((res) => {
  abc = res;
  console.log("dotor " + abc);
});
console.log("gadna " + abc);

//  then = await -- huleene ---------------------------------------------------

function prepare_brakfast() {
  let coffee_promise = new Promise((resolve) => resolve("coffee ready"));
  let egg_promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("finished frying egg");
    }, 1000);
  });
  let combined_promise = Promise.all([coffee_promise, egg_promise]);
  return combined_promise;
}
async function morning() {
  let result = await prepare_breakfast();
  console.log(result);
}

morning();

// -----------------------------------------------------------------------------
