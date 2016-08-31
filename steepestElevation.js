/*
In digital form the map looks like the number grid below.

4 4
4 8 7 3
2 5 9 3
6 3 2 5
4 4 1 6

The first line (4 4) indicates that this is a 4x4 map. Each number represents the elevation of
that area of the mountain. From each area (i.e. box) in the grid you can go north, south, east,
west - but only if the elevation of the area you are going into is less than the one you are in.
I.e. you can only ski downhill. You can start anywhere on the map and you are looking for a
starting point with the longest possible path down as measured by the number of boxes you visit.
And if there are several paths down of the same length, you want to take the one with the steepest
vertical drop, i.e. the largest difference between your starting elevation and your ending
elevation.

On this particular map the longest path down is of length=5 and it’s highlighted: 9-5-3-2-1.

4 4
4 8 7 3
2 5 9 3
6 3 2 5
4 4 1 6

There is another path that is also length five: 8-5-3-2-1. However the tie is broken by the first
path being steeper, dropping from 9 to 1, a drop of 8, rather than just 8 to 1, a drop of 7.

Your challenge is to write a program in javaScript to find the longest (and then steepest) path
on this map specified in the format above.
*/

const mountain = [
  [4, 8, 7, 3],
  [2, 5, 9, 3],
  [6, 3, 2, 5],
  [4, 4, 1, 6],
];

const steepestSlope = (array) => {
  let record = [];

  const store = (slope) => {
    slope.length > record.length ? (record = slope) : '';
    const steepness = slope[0] - slope[slope.length - 1] > record[0] - record[record.length - 1];
    slope.length === record.length && steepness ? (record = slope) : '';
  };

  const router = (i, j, value, initial) => {
    store(value);
    if (initial || (mountain[i] && mountain[i][j] && value[value.length - 1] > mountain[i][j])) {
      router(i, j - 1, initial ? value : [...value, mountain[i][j]]);
      router(i, j + 1, initial ? value : [...value, mountain[i][j]]);
      router(i - 1, j, initial ? value : [...value, mountain[i][j]]);
      router(i + 1, j, initial ? value : [...value, mountain[i][j]]);
    }
  };

  for (const [i, row] of array.entries()) {
    for (const [j, value] of row.entries()) {
      router(i, j, [value], true);
    }
  }

  return record;
};


steepestSlope(mountain); // [ 9, 5, 3, 2, 1 ]
