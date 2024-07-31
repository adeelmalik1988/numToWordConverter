// const prompt = require('prompt-sync')()

import { numToWord } from "./numToWord.mjs";

// const oneToNinteenInt = [
//   0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
// ];

// const oneToNinteenWords = [
//   "zero",
//   "one",
//   "two",
//   "three",
//   "four",
//   "five",
//   "six",
//   "seven",
//   "eight",
//   "nine",
//   "ten",
//   "eleven",
//   "twelve",
//   "thirteen",
//   "forteen",
//   "fifteen",
//   "sixteen",
//   "seventeen",
//   "eighteen",
//   "ninteen",
//   "twenty",
// ];

// // console.log(oneToNinteenWords[oneToNinteenInt.indexOf(10)])

// const tens = [
//   "ten",
//   "twenty",
//   "thirty",
//   "forty",
//   "fifty",
//   "sixty",
//   "seventy",
//   "eighty",
//   "ninty",
//   "hundred",
// ];

// const units = [
//   "zero",
//   "one",
//   "two",
//   "three",
//   "four",
//   "five",
//   "six",
//   "seven",
//   "eight",
//   "nine",
// ];

//prototype made for split string into equal pieces

// function num3DigitConv(digit3) {
//   // console.log(digit3)
//   // console.log(digit3.toString().length)

//   // console.log('func', digit3.toString().split(''))
//   let digArr = digit3.toString().split("");
//   // console.log('func', digArr[0])

//   digArr.shift(); //removing 3 digit

//   let twoDigit = Number(digArr.join(""));
//   // console.log('func', twoDigit)

//   var hundInt = Number(digit3.toString().split("").shift());
//   // console.log('hundInt',hundInt)

//   var hundWord = units[hundInt];

//   // console.log('hundWord',hundWord)

//   // console.log("filter",oneToNinteenInt.filter(x=> x == twoDigit)[0])

//   let filterResult2Digit = oneToNinteenInt.filter((x) => x == twoDigit)[0];

//   // console.log("filterResult2Digit",filterResult2Digit)

//   if (filterResult2Digit) {
//     var twoDigitWord =
//       oneToNinteenWords[oneToNinteenInt.indexOf(filterResult2Digit)];
//     // console.log("if",twoDigitWord)
//   } else {
//     let tenth = Number(twoDigit.toString().split("").shift());
//     let unit = Number(twoDigit.toString().split("").pop());

//     // console.log("tenth",tenth)
//     // console.log("unit",unit)

//     var tenthWord = tenth == 0 ? "" : tens[tenth - 1];
//     var unitWord = unit == 0 ? "" : units[unit];

//     // console.log(tenthWord)
//     // console.log(unitWord)
//   }
// var convertedIntoWords = []
// //   var digit3Words = `${
// //     hundWord == "zero" && (twoDigitWord || tenthWord || unitWord)
// //       ? ""
// //       : `${hundWord}`
// //   } ${hundWord == "zero" ? "" : `${tens[tens.length - 1]}`} ${
// //     filterResult2Digit ? `${twoDigitWord}` : `${tenthWord} ${unitWord}`
// //   } `;

//   hundWord == "zero" && (twoDigitWord || tenthWord || unitWord)
//       ? ""
//       : convertedIntoWords.push(hundWord)

//       hundWord == "zero" ? "" : convertedIntoWords.push(`${tens[tens.length - 1]}`)

//       filterResult2Digit ? convertedIntoWords.push(`${twoDigitWord}`) : convertedIntoWords.push(`${tenthWord} ${unitWord}`)

// //   console.log("cnve",convertedIntoWords)
//   return convertedIntoWords.join(" ");
// }

// console.log(num3DigitConv(9))

// const billion = ["billion", "million", "thousand", ""];

// function numToWord(numToConv) {
//   let numWord = numToConv.toString();

//   let compWord = [];
//   // console.log(numWord.split(','))
//   let digitsInBillion = 12;
//   let appendZeros = digitsInBillion - numWord.length;
// //   console.log(digitsInBillion - numWord.length);

//   if (numWord.length != digitsInBillion) {
//     // console.log("leng", numWord.length);
//     for (let i = 0; i < appendZeros; i++) {
//       numWord = `0${numWord}`;
//       // console.log("comma",numWord.length)
//       // if(numWord.length%3 == 0){
//       //     numWord = `,${numWord}`
//       // }
//       // console.log(numWord,i)
//     }
//     // console.log("mod", numWord);
//   }

//   let splitedNum = numWord.splitStringEqualLengths(3);
//   // if(splitedNum[0].length != 3){
//   //     console.log("ok",splitedNum[0] )
//   //     splitedNum[0].length == 2 ?

//   //     splitedNum[0] = `0${splitedNum[0]}` : splitedNum[0] = `00${splitedNum[0]}`

//   //     console.log(splitedNum[0])

//   // }

// //   console.log(splitedNum);

//   for (let i = 0; i < splitedNum.length; i++) {
//     if (splitedNum[i] != "000") {
//     //   console.log("num", splitedNum[i]);
//     //   console.log("unit", billion[i]);
//       let dig3Word = num3DigitConv(splitedNum[i]);

//       compWord.push(dig3Word);
//       compWord.push(billion[i]);
//     }
//   }

// //   console.log(compWord);
//  return compWord.join(" ").replace(/\s+/g,' ').trim()   //triming Extra spaces
// }

// console.log(`${num3DigitConv('006')} ${billion[2]} ${num3DigitConv(883)} ${billion[1]} ${num3DigitConv('004')} ${billion[0]} and ${num3DigitConv('004')}`)

// let enteredNumber = prompt("Please enter number(range -100 Billion to 100 Billion): ");

export default function numtowordconverter(enteredNumber) {
  var returnObject = {
    enteredNumber,
    isNegative: false,
    numType: "positive",
    numConvertedToWords: "",
    errorMsg: "",
  };
  
  let validRangeOfNumber = 15 ;   
  let enteredNumberConv = Number(enteredNumber);
  console.log(enteredNumberConv)
  if (enteredNumberConv < 0) {
    returnObject.isNegative = true;
    let convetedNum = numToWord(Math.abs(enteredNumberConv));
    // console.log("less", convetedNum.toString().length);
    // console.log("less", convetedNum.toString());

    if (Math.abs(enteredNumberConv).toString().length <= validRangeOfNumber) {
      // console.log("-ve", convetedNum);
      returnObject.numConvertedToWords = convetedNum;
      returnObject.errorMsg = "number converted successfully";
    } else {
      // console.log("number is out of range");
      returnObject.errorMsg = "number is out of range";
    }
  } else if (enteredNumber == "0") {
    // console.log("zero");
    returnObject.numConvertedToWords = "zero";
    returnObject.errorMsg = "number converted successfully";
  } else if (enteredNumberConv.toString().length <= validRangeOfNumber && enteredNumberConv) {

    let convetedNum = numToWord(Math.abs(enteredNumberConv));

    // console.log(convetedNum);

    returnObject.numConvertedToWords = convetedNum;
    returnObject.errorMsg = "number converted successfully";
  } else if (enteredNumberConv.toString().length > validRangeOfNumber) {
    returnObject.numConvertedToWords = "";
    returnObject.errorMsg = "number is out of range";
    // console.log("number is out of range");
  } else {
    // console.log("please enter valid number");
    returnObject.numConvertedToWords = "";
    returnObject.errorMsg = "please enter valid number";
  }

  returnObject.numType = returnObject.isNegative ? "negative" : "positive";

  return returnObject;
}

console.log(numtowordconverter("000001"));
// console.log((999999999999999).toString().length);


