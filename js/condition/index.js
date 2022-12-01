// let a = 15;
// let b = 18;
// let answer = a == b;
// let answer1 = !(a = b);
// let answer2 = a === b;

// // ! tendeg ni negatian-uguisgeh, yamar 1 yumiig esreg bolgoh
// console.log(a != b);
// console.log(a >= b);
// console.log(a > b);
// console.log(a == b);
// console.log(!answer);
// console.log(!!answer);

// // differense between 3 equal

// //  === shuud haritsuuldag /strict equal/
// // == horvuulj baigaad too bolgoj haritsuuldag
// //  !== tentsuu bishuu
// // {} -> curlii break   harah!!!!!!!!

// let myAge = 16;
// if (myAge >= 21) {
//   console.log("yes");
// } else {
//   console.log("no");
// }

// console.log(myAge > 21);

// //  hervee /if/ dotor boolean logic orj ireh

// //unreache un detected- hezeech ochihgui.

// let myAge1 = 11;

// if (myAge1 < 16) {
//   console.log("child");
// } else if (myAge1 < 21) {
//   console.log("teenager");
// } else if (myAge1 < 40) {
//   console.log("adult");
// } else {
//   console.log("old");
// }

// let day = 10;
// let none = "tiim odor baihgui xaxa";

// if (day == 1) {
//   console.log("Mon");
// } else if (day == 2) {
//   console.log("Tue");
// } else if (day == 3) {
//   console.log("Wed");
// } else if (day == 4) {
//   console.log("Thu");
// } else if (day == 5) {
//   console.log("Fri");
// } else if (day == 6) {
//   console.log("Sat");
// } else if (day == 7) {
//   console.log("Sun");
// } else {
//   console.log("none");
// }

// // ------------------------------------------------- thank you next

// let day2 = 10;
// let weekName;

// if (day2 == 1) {
//   weekName = "Monshdee";
// } else if (day2 == 2) {
//   weekName = "Miigaa";
// } else if (day2 == 3) {
//   weekName = "Lkhagwaa";
// } else if (day2 == 4) {
//   weekName = "Purev";
// } else if (day2 == 5) {
//   weekName = "Baasan ah";
// } else if (day2 == 6) {
//   weekName = "Byambaa";
// } else if (day2 == 7) {
//   weekName = "Nyamaa";
// } else {
//   weekName = "Obsoyooo";
// }
// console.log(weekName);

// // ------------------------------------------------thank you next

// // not (!) -> za medkuee
// // and (&&) operator -> 2 taliin nohtsol zaaval biyelej baij true bolno,
// // or (||) operator-iin 2 talii nohtsoliin ali neg ni biyelej baij true garna
// // else ->asuult bish

// let weekday1 = 10;
// let weekName1;
// if (weekday1 < 1 || weekday1 > 7) {
//   console.log("Error");
// }

// if (weekday1 >= 1 && weekday1 <= 7) {
//   console.log("zov too oruulsan bainaaaa");
// }

// if (weekday1 >= 1 && weekday1 <= 7) {
//   if (weekday1 == 1) {
//     weekName1 = "Mon";
//   } else if (weekday1 == 2) {
//     weekName1 = "Tue";
//   }
// } else {
//   console.log("error");
// }

// //  switch -> solih
// // statement-> ilerhiileh
// // duusgahiin tuld break commandaar duusgadag
// // weekday2->utga onooh

// let weekday2 = 5;

// switch (weekday2) {
//   case 1:
//     console.log("monday");
//     break;
//   case 2:
//     console.log("tuesday");
//     break;
//   case 3:
//     console.log("wednesday");
//     break;
//   case 4:
//     console.log("thursday");
//     break;
//   case 5:
//     console.log("friday");
//     break;
//   case 6:
//     console.log("saturday");
//     break;
//   case 7:
//     console.log("sunday");
//     break;
//   default:
//     console.log("not a day");
// }

// // -----------------------------------

// //  huvisagch zarlana -> nertei dotroo ooriin utgatai -> 1000 huvisagch bj bolno
// // break command gargaad haychihdag -> break baihgui tohioldold daraalluulaad biyelegdeh hurtel shalgana

// let weekday3 = 5;
// if (
//   weekday3 == 1 ||
//   weekday3 == 2 ||
//   weekday3 == 3 ||
//   weekday3 == 4 ||
//   weekday3 == 5
// ) {
//   console.log("working day");
// }

// let x = 15;

// if (x > 10 && x < 20) {
//   console.log("10s 20n hoorond");
// }

// let g = 22,
//   y = 20,
//   z = 24;

// if (g > y) {
//   console.log(g, "n ih");
// } else {
//   console.log(y, "n ih");
// }

// if (g > y) {
//   if (g > z) {
//     console.log(g, "hamgiin ih");
//   } else {
//     console.log(z, "hamgiin ih");
//   }
// } else if (y > z) {
//   console.log(y, "n hamgiin ih");
// }

// if (x > y && x > z) {
//   console.log(x, "hamgiin ih");
// } else if (y > z) {
//   console.log(y, "hamgiin ih");
// } else {
//   console.log(z, "n hamgiin ih");
// }

// let number = 17;

// if (number % 2 == 1) {
//   console.log(number, "sondgoi");
// }
// let num1 = 7;
// console.log(parseInt(num1 / 3));

let age = 16;
// if (age < 21) {
//   console.log("21 ees baga");
// } else {
//   console.log("21 ees ih");
// }

//  ternary-> gurvalsan
// condition ? (if its true) : (if its false)
age < 21 ? console.log("21 ees ih") : console.log("21 ees baga");

// nest
// const
// let
