/*
The only thing we need to remember in doing an anagram is
we are excluding the letters we have used already.
If we have 'abc' and we are currently using 'a' now, the
next letters to use from are 'bc'. Same if we are using 'b'
then the next letters should only be 'ac'. Now of course
if we are using 'ab', our next letter to use from should only
be 'c' since we are excluding 'b'. Now how to do the algorithm
correctly? Correct slicing that would not include the letter we
are currently using.
*/

const allAnagrams = (str, anagram = '', result = [], std = str) => {
  if (anagram.length === std.length && result.indexOf(anagram) < 0) {
    result.push(anagram);
  }

  for (let i = 0; i < str.length; i++) {
    result.concat(allAnagrams(str.slice(0, i) + str.slice(i + 1), anagram + str[i], result, std));
  }

  return result;
};

allAnagrams('abc');
// [ "abc", "acb", "bac", "bca", "cab", "cba" ]
allAnagrams('apps');
// ["apps","apsp","aspp","paps","pasp","ppas","ppsa","psap","pspa","sapp","spap","sppa"]


/*
Given a single input string, write a function that produces all possible
anagrams of a string and outputs them as an array. At first, don’t worry
about repeated strings. What time complexity is your solution?
string - a string of characters.
*/
