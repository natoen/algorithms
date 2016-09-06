const keypad = {
  0: '0', 1: '1', 2: 'ABC', 3: 'DEF',
  4: 'GHI', 5: 'JKL', 6: 'MNO',
  7: 'PQRS', 8: 'TUV', 9: 'WXYZ',
};

const telephoneWords = (digitString, permu = '') => {
  let result = [];

  if (permu.length === 4) {
    return [permu];
  }

  for (let i = 0; i < keypad[digitString[permu.length]].length; i++) {
    result = result.concat(
      telephoneWords(
        digitString,
        permu + keypad[digitString[permu.length]][i]
      )
    );
  }

  return result;
};


/*
Telephone Words
Each number key on a standard phone keypad has a set of Latin letters written on it as well: http://en.wikipedia.org/wiki/File:Telephone-keypad2.svg

Businesses often try to come up with clever ways to spell out their phone number in advertisements
to make it more memorable. But there are a lot of combinations!

Write a function that takes up to four digits of a phone number, and returns a list of all of the
words (in alphabetical order) that can be written on the phone with that number. (You should return
all permutations, not only English words.)


digitString:
"0002"
answers:
[ "000A", "000B", "000C" ]

digitString:
"1123"
answers:
[ "11AD", "11AE", "11AF", "11BD", "11BE", "11BF", "11CD", "11CE", "11CF" ]
*/
