function sieve(n) {
  var array = [], primes = [];

  for (var i = 2; i <= n; i++) {
    if (!array[i]) {
      primes.push(i);

      for (var j = i << 1; j <= n; j += i) 
        array[j] = true;
    }
  }

  return primes;
};

console.log(sieve(11));