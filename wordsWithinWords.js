function nestedWordCount(wordList) {
  let result = [null, 0];

  wordList.forEach(word => {
    let count = 0;
    wordList.forEach(subWord => (word.includes(subWord) ? count++ : ''));
    result = count > result[1] ? [word, count] : '';
  });

  return result[0];
}

nestedWordCount(['gray', 'grays', 'ray', 'rays', 'strays']); // grays

/*
Words within Words
Given an array of unique words,
find the word that contains the greatest number of other words.
A word must be at least two letters long. For an added challenge, try for O(n).

Example:
wordList:
[ "gray", "grays", "ray", "rays", "strays" ]
answer:
"grays"
*/
