# numToWordConverter

## Description
##### This package converts number into words. Range is from -999 Trillion to 999 Trillion i.e. -999999999999999 to 999999999999999"

## How to install

```
npm i numtowordconverter
```

## How to Use

#### Import Default Function
##### Add Valid number as an argument. Other than number will through an error
```
import numtowordconverter from "numtowordconverter"

var numToWords = numtowordconverter(-999999999999999) 

console.log(numToWords)

```
 
#### It will return simple Object

```
{
  enteredNumber: -999999999999999,
  isNegative: true,
  numType: 'negative',
  numConvertedToWords: 'nine hundred ninty nine trillion nine hundred ninty nine billion nine hundred ninty nine million nine hundred ninty nine thousand nine hundred ninty nine',
  errorMsg: 'number converted successfully'
}
```
#### Object Detais

```
enteredNumber: number
isNegative: Boolean
numType: string,
numConvertedToWords: string,
errorMsg: string

```
