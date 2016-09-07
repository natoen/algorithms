const rotatedArraySearch = (rotated, target) => {
  const lbp = rotated.length - 1;
  const hbp = 0;
  let min = rotated.length - 1 === rotated.indexOf(Math.min(...rotated)) ?
    rotated.length - 1 : rotated.indexOf(Math.min(...rotated));
  let max = min ? min - 1 : lbp;

  if (target < rotated[lbp]) {
    max = lbp;
  } else {
    min = hbp;
  }

  while (min <= max) {
    const median = Math.floor((min + max) / 2);

    if (target < rotated[median]) {
      max = median - 1;
    } else if (rotated[median] < target) {
      min = median + 1;
    } else {
      return median;
    }
  }

  return -1;
};


/*
Rotated Array Search
If you have a sorted array, a rotated version of that array is the sorted array rotated some number
of times left or right. For example, a rotated version of [0, 1, 2, 3, 4] is [3, 4, 0, 1, 2]
(rotated right twice). Each rotated array has a single pivot point where the groups of values to the
left and right are sorted, but the sorting does not continue accross the pivot.


Given a rotated, sorted array, your task is to efficiently find the index of an element within that
array. Your time complexity goal is O( log(n) ), where ‘n’ is the number of elements in the array.
For simplicity, you can assume that there are no duplicate elements in the array.


rotated:
[ 4, 5, 6, 0, 1, 2, 3 ]
target:
2
answer:
5

rotated:
[ 4, 5, 6, 0, 1, 2, 3 ]
target:
100
answer:
-1

rotated:
[3, 4, 5, 6, 7, 1, 2];
target:
1
answer:
5

rotated:
[1, 2, 0];
target:
2
answer:
1

rotated:
[0];
target:
0
answer:
0

*/
