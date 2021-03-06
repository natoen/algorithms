const characterFrequency = (string) => {
  const letters = {};
  const result = [];

  for (const value of string) {
    letters[value] = ++letters[value] || 1;
  }

  for (const key in letters) {
    result.push([key, letters[key]]);
  }

  return result.sort((a, b) => {
    if (a[1] < b[1] || (a[1] === b[1] && a[0] > b[0])) {
      return 1;
    } else if (a[1] > b[1] || (a[1] === b[1] && a[0] < b[0])) {
      return -1;
    }

    return 0;
  });
};


/*
Character Frequency
Write a function that takes as its input a string and returns an
array of arrays as shown below sorted in descending order by frequency
and then by ascending order by character.

string:
"aaabbc"  [ [ "a", 3 ], [ "b", 2 ], [ "c", 1 ] ]
string:
"mississippi" [ [ "i", 4 ], [ "s", 4 ], [ "p", 2 ], [ "m", 1 ] ]
string:
""  [ ]
*/
