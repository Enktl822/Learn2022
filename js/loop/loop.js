//  ascii tablet -> usgiig too-ruu hovruuldeg

let word = "abc123";
console.log(word.charCodeAt(3));

//  count - tooloh

let words =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

let count = 0;
let countA = 0;
while (count < words.length) {
  if (words[count] == "a" || words[count] == "A") {
    countA = countA + 1;
  }
  count = count + 1;
}
console.log(countA);

//  do while nohtsol ni dooroo -> hiicheed - dahij hiih esehee shiiddeg -> example

//  algoritm -> float chart

let number = 100;

//  num -- -> 1 eer hasdag

let num1 = 15;
num1++; // number = number +1;
console.log(num1);

// increment
// decrement

//  fipponichi series daraalalsan toonuudiin niilber -> logic
//  a-> 1 b->2 c->a=b  a=b b=c c=a+b zogsoh nohtsol 100 ->omnoh too b

// topic: scope-> ugalzan haaltand bichigdsen zuil ter haaltand uilchilne -> global scope
// complicate
// temp - temprary - tur
// count=0 ogood olon ashiglaj bolno

let x = 10;
let count1 = 1;

// while (x > 0) {
//   let y = 10;
//   while (y > 0) {
//     console.log(count1);
//     y--;
//     count1++;
//   }
//   x--;
// }
console.log(count1);

let output = "";

while (x > 0) {
  let y = 10;
  while (y > 0) {
    output = output + count1 + " \t ";
    if (count1 % 10 == 0) output += "\n"; // output = output + "/n"
    y--;
    count1++;
  }
  x--;
}
console.log(output);
