// for (initialize; condition; update) {
// things to do while condition is true
// }

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

//  for loop dotor for loop hiih

for (let i = 1; i <= 10; i++) {
  for (let j = 1; j < 10; j++) {
    console.log(i, "", j);
  }
}

let output = "";

for (let row = 1; row < 10; row++) {
  for (let col = 1; col < 10; col++) {
    output += col + " ";
    debugger;
  }
  output += "\n";
}

console.log(output);

// output += col + " "; -> output=output+col+"";
//  debugger ->  uil yavtsaa harj bolno

let output2 = "";
let n = 10;

for (let row = 1; row <= n; row++) {
  for (let col = 1; col <= n; col++) {
    output2 += "* ";
  }
  output2 += "\n";
}

console.log(output2);

// process.stdout.write("* ")

let output3 = "";
let f = 6;

for (let row = 1; row <= f; row++) {
  for (let col = 1; col <= f; col++) {
    if (row == 1 || row == f || col == 1 || col == f) {
      output3 += "* ";
    } else {
      output3 += "  ";
    }
  }
  output3 += "\n";
}
console.log(output3);

let number2 = "1234564567";
// let number2 = "1_234_564_567";
console.log(number2.charAt(number2.length - 3));
console.log(number2.substring(1, 3));
number2 =
  number2.substring(0, number2.length - 3) +
  "_" +
  number2.substring(number2.length - 3, number2.length);
console.log(number2);

// zov passport orohoor alert garch irdeg baih
let passport2 = "123";
let input;

while (passport2 != input) {
  input = prompt("Enter your passwort: ");
}
console.log(alert("congract"));

//  horvuulj baina

// 2

let number3;

while (true) {
  number3 = prompt("Enter a phone number:");
  number3 = Number(number);
  console.log(number);
  console.log(typeofnumber);
  if (number.isIntager(number)) {
    break;
  }
}

// 3

while (true) {
  number3 = prompt("Enter a phone number:");
  let firstChar = number.charAt(0);
  number = Number(number3);
  if (number.isIntager(number) && (firstChar == "9" || firstChar == "8")) {
    break;
  }
}

//  CONTINUE -> while iig shineer ehluuldeg command -> continue ugees doosh buh yumiig algasaad shineer ehliilne

let l = 0;
while (l < 10) {
  l++;
  if (l % 2 == 0) {
    continue;
  }
  console.log(l);
  l++;
}
