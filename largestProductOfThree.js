const largestProductOfThree = (array, multiplier = []) => {
  let result = -Infinity;

  if (multiplier.length === 3) {
    const product = multiplier[0] * multiplier[1] * multiplier[2];
    return product > result ? product : result;
  }

  for (let i = 0; i < array.length; i++) {
    const product = largestProductOfThree(array.slice(0, i).concat(array.slice(i + 1)),
      multiplier.concat([array[i]]));
    result = product > result ? product : result;
  }


  return result;
};


/*
Largest Product of Three
Write a function that accepts an array of integers and returns the largest product possible
from three of those numbers.


array:
[ 2, 1, 3, 7 ]
answer:
42

array:
[ 0, 2, 3 ]
answer:
0
*/
