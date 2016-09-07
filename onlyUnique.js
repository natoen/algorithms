const onlyUnique = (str) => {
  const bank = {};
  const result = str.split('');

  for (let i = 0; i < str.length; i++) {
    bank[str[i]] = ++bank[str[i]] || 1;
  }

  const keys = Object.keys(bank);
  for (let i = 0; i < keys.length; i++) {
    if (bank[keys[i]] > 1) {
      let j;
      do {
        j = result.indexOf(keys[i]);
        delete result[j];
      } while (j > -1);
    }
  }

  return result.join('');
};


/*
Only Unique
Given a string, remove any characters that are not unique from the string.

str:
"abccdefe" -> "abdf"
str:
"hello there" -> "o tr"
str:
"xyz" -> "xyz"
str:
"iiii" -> ""
*/
