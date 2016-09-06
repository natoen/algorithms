const longestPalindrome = (string) => {
  const flip = string.split('').reverse().join('');
  let result = '';

  for (let i = 0; i < string.length; i++) {
    if (string.indexOf(flip.slice(i, 2)) > -1) {
      for (let j = 3; j < string.length + 1; j++) {
        if (string.indexOf(flip.slice(i, j)) === -1) {
          break;
        }
        result = flip.slice(i, j).length > result.length ? flip.slice(i, j) : result;
      }
    }

    if (result.length > flip.length - i) {
      break;
    }
  }

  return result;
};


/*
Longest Palindrome
Implement a function that finds the longest palindrome in a given string.
For example, in the string “My dad is a racecar athlete”, the longest palindrome
is “a racecar a”. Count whitespaces as valid characters. Other palindromes in the
above string include “dad”, “ete”, “ dad “ (including whitespace on each side of dad).

Examples
Input Output
string:
"aibohphobia" "aibohphobia"
string:
"My dad is a racecar athlete" "a racecar a"
*/
