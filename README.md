# numToWordConverter

## How to install

```
npm i numtowordconverter
```

## How to Use

### Import Default Function
```
import numtowordconverter from "numtowordconverter"

var numToWords = numtowordconverter(8762700) 

console.log(numToWords)

```
 
### It will return simple Object

```
{
  isNegative: false,
  numType: 'positive',
  numConvertedToWords: 'eight million seven hundred sixty two thousand seven hundred',
  msg: 'number converted successfully'
}
```
### Object Detais

```
isNegative: Boolean
numType: string,
numConvertedToWords: string,
msg: 'string

```
