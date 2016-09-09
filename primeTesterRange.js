const primeSieve = (start, end) => {
  const result = [];

  for (let i = start; i <= end; i++) {
    if (i <= 1) {
      continue;
    }

    const limit = Math.sqrt(i);
    let prime = true;

    for (let j = 2; j <= limit; j++) {
      if (i % j === 0) {
        prime = false;
      }
    }

    if (prime) {
      result.push(i);
    }
  }

  return result;
};


/*
Prime Tester(extra credit)
Extra credit: Write a function that generates a list of all prime numbers in a user-specified
range (inclusive). If you're not quite sure where to start, check out the Sieve of Eratosthenes
on Wikipedia. (And if you're feeling saucy, check out the Sieve of Atkin.)


start:
20
end:
22
answer:
[ ]

start:
1
end:
2
answer:
[ 2 ]

start:
16
end:
20
answer:
[ 17, 19 ]
*/
