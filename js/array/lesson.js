//  1 huvisagch olon aguulga aguulj boldog huvilbar array

let studentAge = [10, 20, 30, 40];

console.log(studentAge[0]);
console.log(studentAge.length);

studentAge[studentAge.length - 1] = 100;
console.log(studentAge);

// loop +
//  nested

let students = [10, 20, 30];

let studentNames = ["dorjoo", "boldoo", "tsetsgee", "dulmaa"];
let i = 0;
while (i <= studentNames.length) {
  if (studentNames[i] && studentNames[i][0] === "d") {
    console.log(studentNames[i]);
  }
  i++;
}

//  hamgiin urt nertei suragchiig ol.

// let j = 1;
// let longName = studentsName[0];
// let nameLength = studentsName[i][0];

// while (j < studentsName) {

// }
let studentsName = [
  "Sharavnyambuu",
  "Batnyam",
  "Batsukh",
  "Munkhbat",
  "Narandelgerekh",
  "orgil",
  "gonchigsvrenbalbiigombo",
];

let maxName = "";

for (i = 0; i < studentsName.length; i++) {
  if (maxName.length < studentsName[i].length) {
    maxName = studentsName[i];
  }
}

console.log(maxName);
// console.log(studentsName[4]);
// console.log(studentsName.length);
