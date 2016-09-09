/*
We have an array that we will fill with false booleans
and prime numbers. We will start at number 2 and
check if that index in our array has a value false.
If it hasn't then we will fill that spot with the number itself.
We will then continue in getting its multiples until
our limit (input n) and fill those spots with a false correspondingly.
*/

function sieve(n) {
  const array = [];

  for (let i = 2; i <= n; i++) {
    if (array[i] !== false) {
      array[i] = i;

      for (let j = i << 1; j <= n; j += i) {
        array[j] = false;
      }
    }
  }

  return array.filter((element) => !!element);
}

console.log(sieve(20)); // [ 2, 3, 5, 7, 11, 13, 17, 19 ]
