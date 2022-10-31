import {
  oneToNinteenInt,
  oneToNinteenWords,
  tens,
  units
} from "./data.mjs";

export function num3DigitConv(digit3) {
    // console.log(digit3)
    // console.log(digit3.toString().length)
  
    // console.log('func', digit3.toString().split(''))
    let digArr = digit3.toString().split("");
    // console.log('func', digArr[0])
  
    digArr.shift(); //removing 3 digit
  
    let twoDigit = Number(digArr.join(""));
    // console.log('func', twoDigit)
  
    var hundInt = Number(digit3.toString().split("").shift());
    // console.log('hundInt',hundInt)
  
    var hundWord = units[hundInt];
  
    // console.log('hundWord',hundWord)
  
    // console.log("filter",oneToNinteenInt.filter(x=> x == twoDigit)[0])
  
    let filterResult2Digit = oneToNinteenInt.filter((x) => x == twoDigit)[0];
  
    // console.log("filterResult2Digit",filterResult2Digit)
  
    if (filterResult2Digit) {
      var twoDigitWord =
        oneToNinteenWords[oneToNinteenInt.indexOf(filterResult2Digit)];
      // console.log("if",twoDigitWord)
    } else {
      let tenth = Number(twoDigit.toString().split("").shift());
      let unit = Number(twoDigit.toString().split("").pop());
  
      // console.log("tenth",tenth)
      // console.log("unit",unit)
  
      var tenthWord = tenth == 0 ? "" : tens[tenth - 1];
      var unitWord = unit == 0 ? "" : units[unit];
  
      // console.log(tenthWord)
      // console.log(unitWord)
    }
  var convertedIntoWords = []
  //   var digit3Words = `${
  //     hundWord == "zero" && (twoDigitWord || tenthWord || unitWord)
  //       ? ""
  //       : `${hundWord}`
  //   } ${hundWord == "zero" ? "" : `${tens[tens.length - 1]}`} ${
  //     filterResult2Digit ? `${twoDigitWord}` : `${tenthWord} ${unitWord}`
  //   } `;
  
  
  
    hundWord == "zero" && (twoDigitWord || tenthWord || unitWord)
        ? ""
        : convertedIntoWords.push(hundWord)
  
        hundWord == "zero" ? "" : convertedIntoWords.push(`${tens[tens.length - 1]}`)
  
        filterResult2Digit ? convertedIntoWords.push(`${twoDigitWord}`) : convertedIntoWords.push(`${tenthWord} ${unitWord}`)
  
  //   console.log("cnve",convertedIntoWords)
    return convertedIntoWords.join(" ");
  }
  