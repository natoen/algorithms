const numbersToWords = {
  0: 'zero', 1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five', 6: 'six',
  7: 'seven', 8: 'eight', 9: 'nine', 10: 'ten', 11: 'eleven', 12: 'twelve',
  13: 'thirteen', 14: 'fourteen', 15: 'fifteen', 16: 'sixteen', 17: 'seventeen',
  18: 'eighteen', 19: 'nineteen', 20: 'twenty', 30: 'thirty', 40: 'forty',
  50: 'fifty', 60: 'sixty', 70: 'seventy', 80: 'eighty', 90: 'ninety',
};

const numbersToPlace = {
  10: 'ten', 100: 'hundred', 1000: 'thousand', 1000000: 'million', 1000000000: 'billion',
  1000000000000: 'trillion', 1000000000000000: 'quadrillion', 1000000000000000000: 'quintillion',
};

const numberToEnglish = (number) => {
  const numStr = number.toString().split('').reverse().join('');
  const english = [];

  for (let i = 0; i < numStr.length; i++) {
    if ((i + 1) % 3 === 0) {
      if (numStr[i] !== '0') {
        english.unshift(`${numbersToWords[numStr[i]]} hundred`);
      }
    } else {
      const not0 = numStr[i] !== '0' || numStr[i + 1] !== '0' || numStr[i + 2] !== '0';
      const scale = not0 && (i + 1 > 2) ? numbersToPlace[`1${Array(i + 1).join('0')}`] : '';
      const ones = numStr[i] !== '0' ? numbersToWords[numStr[i]] : '';
      const tens = ones && numStr[i + 1] && numStr[i + 1] !== '0' && numStr[i + 1] !== '1' ?
        `${numbersToWords[`${numStr[i + 1]}0`]}-${ones}` :
        numbersToWords[numStr[i + 1] + numStr[i]];
      const digits = tens || ones;
      i++;

      english.unshift(scale ? digits + (digits ? ' ' : '') + scale : digits);
    }
  }

  return numStr.length === 1 ? numbersToWords[number] : english.join(' ').trim();
};

console.log(numberToEnglish(10));
console.log(numberToEnglish(11));
console.log(numberToEnglish(67));
console.log(numberToEnglish(700000));
console.log(numberToEnglish(5625));
console.log(numberToEnglish(355003));
console.log(numberToEnglish(78193512));
console.log(numberToEnglish(1000000000000));


/*
Number to English
Write a function numberToEnglish, it should take a number and
return the number as a string using English words.


number:
7 -> "seven"

number:
575 -> "five hundred seventy-five"

number:
78193512 -> "seventy-eight million one hundred ninety-three thousand five hundred twelve"
*/
