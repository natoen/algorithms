const sumArray = (array) => {
  let greatestSum = -Infinity;

  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j <= array.length; j++) {
      const sum = array.slice(i, j).reduce((prev, crnt) => prev + crnt);

      greatestSum = sum > greatestSum ? sum : greatestSum;
    }
  }

  return greatestSum;
};


/*
Sum Array
Given an array of numbers, calculate the greatest contiguous sum of numbers in it.
A single array item will count as a contiguous sum.

Examples
Input Output
array:
[ 1, 2, 3 ] 6
array:
[ 4, -1, 5 ]  8
array:
[ 10, -11, 11 ] 11
array:
[ 1, 2, 3, -6, 4, 5, 6 ]  15
*/
