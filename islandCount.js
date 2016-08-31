const countIslands = (mapString) => {
  const mapArray = [];

  for (const [i, row] of mapString.split('\n').entries()) {
    mapArray[i] = row.split('');
  }

  const trekker = (i, j) => {
    if (mapArray[i] && mapArray[i][j] === '0') {
      mapArray[i][j] = '.';
      trekker(i, j + 1);
      trekker(i, j - 1);
      trekker(i + 1, j);
      trekker(i - 1, j);
    }
  };

  let result = 0;

  for (const [i, row] of mapArray.entries()) {
    for (const [j, terrain] of row.entries()) {
      terrain === '0' ? (result++, trekker(i, j)) : '';
    }
  }

  return result;
};

countIslands('.0...\n.00..\n....0'); // 3

/*
Island Count
Given a string representation of a 2d map, return the number of
islands in the map. Land spaces are denoted by a zero, while water
is denoted by a dot. Two land spaces are considered connected if
they are adjacent (but not diagonal).

(!!!) NOTICE: Newline characters in the inputs have been replaced
with <br /> tags to make the value easier to read. In other words,
when you see a break, it's actually a \n character. Check your
console when submitting to see the input for yourself.

mapStr:
.0...
.00..
....0
2

mapStr:
..000.
..000.
..000.
.0....
..000.
3

mapStr:
..000.
..0...
..0.0.
..0...
..000.
2

mapStr:
0...0
..0..
0...0
5
*/
