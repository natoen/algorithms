function fractionConverter(number) {
  const fraction = number % 1;

  if (fraction) {
    let i = 1;

    while ((++i * fraction) % 1 && i !== 100);

    return i === 100 ?
      `${String(fraction).slice(2)}/${Math.pow(10, (String(fraction).length - 2))}`
      :
      `${number * i}/${i}`;
  }

  return `${number}/${1}`;
}


/*
Fraction Converter
Write a function that takes a number as its argument and returns a
string that represents that number’s simplified fraction.
Whole numbers and mixed fractions should be returned as improper fractions.

Examples
Input Output
number:
0.5 "1/2"
number:
3 "3/1"
number:
2.5 "5/2"
number:
2.75  "11/4"
*/
