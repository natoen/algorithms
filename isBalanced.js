const isBalanced = (str) => {
  const storage = [];
  const brackets = { '{': '}', '(': ')', '[': ']' };

  for (let i = 0; i < str.length; i++) {
    brackets[str[i]] ? storage.push(str[i]) : '';

    if ((str[i] === '}' || str[i] === ')' || str[i] === ']') && brackets[storage.pop()] !== str[i]) {
      return false;
    }
  }

  return storage.length === 0;
};

isBalanced('(50)('); // false

/*
Balanced Brackets
Given a string, return true if it contains all balanced parenthesis (),
curly-brackets {}, and square-brackets [].

str:
"(x + y) - (4)" true
str:
"(x + y) - (4)" true
str:
"(((10 ) ()) ((?)(:)))" true
str:
"[{()}]"  true
str:
"(50)(" false
str:
"[{]}"  false

*/
