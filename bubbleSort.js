const bubbleSort = (array) => {
  for (const i of array.keys()) {
    let left = array[i];
    let right = array[i + 1];

    if (left > right) {
      [array[i], array[i + 1]] = [right, left];
    }

    for (let j = i; j > 0; j--) {
      left = array[j - 1];
      right = array[j];

      if (left > right) {
        [array[j - 1], array[j]] = [right, left];
      }
    }
  }

  return array;
};

let expected = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 22, 22, 22, 222, 2222];
let result = bubbleSort([2, 2, 2, 2, 2, 2, 2, 2, 222, 2222, 22, 2, 2, 22, 2, 22]);
console.log(expected.toString() === result.toString());

expected = [-10, -10, 2, 4, 20, 299];
result = bubbleSort([20, -10, -10, 2, 4, 299]);
console.log(expected.toString() === result.toString());

/*
Bubble sort is considered the most basic sorting algorithm in Computer Science.
It works by starting at the first element of an array and comparing it to the second element:
If the first element is greater than the second element, it swaps the two.
It then compares the second to the third, and the third to the fourth, and so on.
In this way, the largest values ‘bubble’ to the end of the array.
Once it gets to the end of the array, it starts over and repeats the process until
the array is sorted numerically.
Implement a function that takes an array and sorts it using this technique.

NOTE: DO NOT use JavaScript’s built-in sorting function (Array.prototype.sort).

var should = chai.should();
var assert = chai.assert;

//
// sort this array
//
describe('isSubsetOf', function(){

  it(': sort it', function() {
    Array.prototype.sort = null;
    var input = [20, -10, -10, 2, 4, 299];
    var expected = [-10, -10, 2, 4, 20, 299].toString();
    var actual = bubbleSort(input).toString();
    actual.should.equal(expected);
  });

//
// and this array
//

  it(': sort it', function() {
    Array.prototype.sort = null;
    var input = [2, 2, 2, 2, 2, 22, 2, 2, 222, 2222, 22, 2, 2, 2,
      2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 22];
    var expected = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
      2, 2, 2, 2, 2, 2, 2, 22, 22, 22, 222, 2222].toString();
    var actual = bubbleSort(input).toString();
    actual.should.equal(expected);
  });

//
// also this array, thank you
//
  it(': sort it', function() {
    Array.prototype.sort = null;
    var input = [18, 30, 25, 28, 24, 19, 31, 20, 35, 24, 36, 26, 30, 29, 40, 36];
    var expected = [18, 19, 20, 24, 24, 25, 26, 28, 29, 30, 30, 31, 35, 36, 36, 40].toString();
    var actual = bubbleSort(input).toString();
    actual.should.equal(expected);
  });
});
*/
