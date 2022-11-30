//  string-temdegt mor
//  '' qoutehmarker  , 2 baival double
// qatishmarket baigaa bol string
//    \ -white space -> tuga temdeglegee hiij bolno

let mystring = "single quote' double qoutes \" ";
console.log(mystring);

// length-urt -> temdegtiin urtiin tooldog
//  doosh unagaamaar /m
//  \\ -> backslash- ooriig ni hevlej gargaj irmeer baih

//  charAt() -> method = function /baga zergiin yalgaatai/
//  property-> example : let -> length property
//  charAt() -> yellow ongotei yum bolgon /method = function/
//  character- /shinj chanar/- tend bairlah temdegt ni gej orchuulagdah
//   charAt() = [] yalgaagui

/*console.log(BabySharkLyrics[BabySharkLyrics.length - 1]);

const str = "Life and University";
console.log(str.toUpperCase());*/

//  concate -> 2 uildliig zalgah -> .concat() <- haaltand bichne

let firstNme = "John";
let fullName = firstNme.concat("", "Smith");
console.log(fullName);
console.log(firstNme);

// str-> string ugnii tovchlol -> substring gej bochcigleltei baij bolno
// index -> utga ni - ted deh character -> index-iin dugaar
//  substring -> tuslah string
//  ehleh index

// substring -> (4,5)
// substr ->

let str = "this isa a string";
console.log(str.indexOf("is"));
// -> is gesen zeregtssen 2 sh charachter
// index -> charachter yu bna hamaagui tooldog

//  string salgaj avah ?
let mystring1 = "a this is substring";
//  index dugaar oloh

console.log(mystring1.indexOf("is"));
let firstPart = mystring1.substring(0, mystring1.indexOf("is"));

//  .trim(); - hasna -> space arilgadag method;

// window=prompt -> google chrome ruu handaj baihgaa
// default utga ogch bolno -> ogogdol
// promptoos orj irsen utga dandaa string baidag -> numberluu hovruuldeg

//  string herhen horvuuleh ve? -> === -> strig contidion
//  number,is iteger - too buhel uu ?

let number = 123.456123;
let displaynumber = number.toFixed(2);
console.log(displaynumber);
console.log(number.toFixed(2));

// "123.46"
//  diff-diffrence
//  ceil-taaz, floor-shal -> deesh tegshileh uu, dooshoo tegshleh uu -> butarhai toog arilgah
//  round - toimloh
//  pow-power -> zereg devshuuleh
// random

console.log(Math.floor(Math.random() * 6) + 1);
