/*
We'll run a loop iterating our input string.
For every iteration we will check if there are
no another occurence of our letter behind it
and after it in which we will return the letter.
If the loop ends without achieving our condition
then we will return 'sorry'.
*/

function firstNonRepeatedCharacter (string) {
  for (var i = 0; i < string.length; i++) {
    if (!string.slice(i + 1).includes(string[i]) && !string.slice(0, i).includes(string[i])) {
      return string[i];
    } 
  }

  return 'sorry';
}


/*
Non-Repeated Character
Given an arbitrary input string, return the first non-repeating character. 
For strings with all repeats, return 'sorry'.

"ABCDBIRDUP"  "A"

"XXXXXXX" "sorry"

"ALAMABA" "L"

"BABA"  "sorry"
*/