import { num3DigitConv } from "./num3DigitConv.mjs";
import { billion } from "./data.mjs";

if (!String.prototype.splitStringEqualLengths) {
  String.prototype.splitStringEqualLengths = function (sliceLength) {
    if (sliceLength === undefined || sliceLength > this.length) {
      sliceLength = this.length;
    }
    const yardStick = new RegExp(`.{${sliceLength}}`, "g"); //finding single character with "." and making it lenght of finding char to sliceLength. final regexp will be '/.{3}/g'
    const pieces = this.match(yardStick); //matching regexp. it returns array for matches and null if no match found
    const accumalated = pieces.length * sliceLength; //expersions into pieces
    const modulo = this.length % accumalated;

    if (modulo) pieces.push(this.slice(accumalated));
    return pieces;
  };
}

export function numToWord(numToConv) {
  let numWord = numToConv.toString();

  let compWord = [];
  // console.log(numWord.split(','))
  let digitsInBillion = 12;
  let appendZeros = digitsInBillion - numWord.length;
  //   console.log(digitsInBillion - numWord.length);

  if (numWord.length != digitsInBillion) {
    // console.log("leng", numWord.length);
    for (let i = 0; i < appendZeros; i++) {
      numWord = `0${numWord}`;
      // console.log("comma",numWord.length)
      // if(numWord.length%3 == 0){
      //     numWord = `,${numWord}`
      // }
      // console.log(numWord,i)
    }
    // console.log("mod", numWord);
  }

  let splitedNum = numWord.splitStringEqualLengths(3);
  // if(splitedNum[0].length != 3){
  //     console.log("ok",splitedNum[0] )
  //     splitedNum[0].length == 2 ?

  //     splitedNum[0] = `0${splitedNum[0]}` : splitedNum[0] = `00${splitedNum[0]}`

  //     console.log(splitedNum[0])

  // }

  //   console.log(splitedNum);

  for (let i = 0; i < splitedNum.length; i++) {
    if (splitedNum[i] != "000") {
      //   console.log("num", splitedNum[i]);
      //   console.log("unit", billion[i]);
      let dig3Word = num3DigitConv(splitedNum[i]);

      compWord.push(dig3Word);
      compWord.push(billion[i]);
    }
  }

  //   console.log(compWord);
  return compWord.join(" ").replace(/\s+/g, " ").trim(); //triming Extra spaces
}


// let str = "abcdefghijklmnopqrst1rt";
// const max_size = 3;
// const str_1 = str.slice(0, max_size);
// const str_2 = str.slice(max_size, max_size * 2);
// const str_3 = str.slice(max_size * 2, max_size * 2 + max_size);
// const str_4 = str.slice(max_size * 2 + max_size);

// console.log(str_4);

// const yardStick = new RegExp(`.{${max_size}}`, "g"); //finding single character with "." and making it lenght of finding char to max_size. final regexp will be '/.{3}/g'
// const pieces = str.match(yardStick); //matching regexp. it returns array for matches and null if no match found
// const accumalated = pieces.length * max_size; //expersions into pieces
// const modulo = str.length % accumalated;

// if (modulo) pieces.push(str.slice(accumalated));

// console.log(yardStick);
// console.log(pieces);
// console.log(accumalated);
// console.log(modulo);
// console.log(str.{3})

// assert.equal(`${str_1}${str_2}${str_3}${str_4}`, str);

// let str = "abcdefghijklmnopqrst1rt";
// let pieces = str.splitStringEqualLengths(3)
// console.log(pieces)