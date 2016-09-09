const powerSet = (string, permu = '', sorted) => {
  sorted = sorted || string.split('').sort().filter((item, i, array) =>
    array.lastIndexOf(item) === i
  );

  const result = [permu];

  for (let i = 0; i < sorted.length; i++) {
    result.push(...powerSet(string, permu + sorted.slice(i, i + 1), sorted.slice(i + 1)));
  }

  return result;
};


/*
Power Set
Return an array that contains the power set of a given string.
The power set is a set of all the possible subsets, including the empty set.

Make sure your code does the following:

All characters in a subset should be sorted alphabetically,
and the array of subsets should be sorted alphabetically.
Sets of the same characters are considered duplicates regardless of order and count only once,
e.g. ‘ab’ and ‘ba’ are the same.
Duplicate characters in strings should be ignored; for example, ‘obama’ should be evaluated as
if it only contained one ‘a’. See the result below.

string:
"a"
answer:
[ "", "a" ]

string:
"ab"
answer:
[ "", "a", "ab", "b" ]

string:
"horse"
answer:
[ "", "e", "eh", "eho", "ehor", "ehors", "ehos", "ehr", "ehrs", "ehs", "eo", "eor", "eors", "eos",
 "er", "ers", "es", "h", "ho", "hor", "hors", "hos", "hr", "hrs", "hs", "o", "or", "ors", "os",
 "r", "rs", "s"]

 string:
 "cruz"
 answer:
[ '', 'c', 'cr', 'cru', 'cruz', 'crz', 'cu', 'cuz', 'cz', 'r', 'ru', 'ruz', 'rz', 'u', 'uz', 'z' ]
*/
