const longestRun = (string) => {
  let result = [0, 0];

  for (const [i, letter] of string.split('').entries()) {
    let j = i;

    while (string[++j] && letter === string[j]) {}

    result = j - 1 - i > result[1] - result[0] ? [i, j - 1] : result;
  }

  return result;
};

longestRun('abccccccc'); // [ 2, 8 ]
longestRun('mississippi'); // [ 2, 3 ]

/*
Longest Run
Write a function that, given a string,
finds the longest run of identical characters and
returns an array containing the start and end indices of that run.
If there are two runs of equal length, return the first one.
Return [0,0] for no runs.

"abbbcc"  [ 1, 3 ]
"aabbc" [ 0, 1 ]
""  [ 0, 0 ]
"mississippi" [ 2, 3 ]
"abcdefgh"  [ 0, 0 ]
"abccccccc" [ 2, 8 ]
*/
