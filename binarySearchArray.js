const binarySearch = (array, target) => {
  let min = 0;
  let max = array.length - 1;

  while (min <= max) {
    const i = Math.floor((min + max) / 2);
    const item = array[i];

    if (item < target) {
      min = i + 1;
    } else if (item > target) {
      max = i - 1;
    } else {
      return i;
    }
  }

  return -1;
};

binarySearch([11, 12, 13, 14, 15], 15); // 4
const array = [0, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300, 1400, 1500,
  1600, 1700, 1800, 1900, 2000, 2100, 2200, 2300, 2400, 2500, 2600, 2700, 2800, 2900, 3000, 3100,
  3200, 3300, 3400, 3500, 3600, 3700, 3800, 3900, 4000, 4100, 4200, 4300, 4400, 4500, 4600, 4700,
  4800, 4900];
const target = 1700;
console.log(binarySearch(array, target));

/*
Binary Search Array
Given a sorted array of integers, find the index
of a target value using a binary search algorithm.

A binary search finds an item in a sorted array by
repeatedly choosing a middle value and dividing the search interval in half.
The initial interval includes the whole array. If the value of the target
value is less than the middle value of the interval, then the next interval
will be the lower half of the current interval. If the value of the target
value is greater than the middle value, then the next interval will be the upper half.
The search process repeats until the middle value is equal to the target value, or the
search interval is empty.


Note:
Your function should return -1 for target values not in the array.
Do NOT use Array.prototype.indexOf in your solution. What would be the fun in that?

Parameters:
array (required) - an array.
target (required) - an integer value.


array:
[ 5 ]
target:
4
output:
-1

array:
[ 11, 12, 13, 14, 15 ]
target:
11
output:
0

array:
[ 11, 12, 13, 14, 15 ]
target:
12
output:
1

array:
[ 11, 12, 13, 14, 15 ]
target:
13
output:
2

array:
[ 11, 12, 13, 14, 15 ]
target:
14
output:
3

array:
[ 11, 12, 13, 14, 15 ]
target:
15
output:
4

array:
[ 11, 12, 13, 14, 15 ]
target:
16
output:
-1
*/
