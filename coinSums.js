const coins = [1, 2, 5, 10, 20, 50, 100, 200];

const coinSums = (total, pences = 0, i = 0) => {
  let count = 0;

  if (total <= pences) {
    return total === pences ? 1 : 0;
  }

  for (i; i < coins.length; i++) {
    count += coinSums(total, pences + coins[i], i);
  }

  return count;
};


/*
Coin Sums
In England the currency is made up of pound, £, and pence, p,
and there are eight coins in general circulation:

1p
2p
5p
10p
20p
50p
£1 (100p)
£2 (200p)
Given a given number of pence, return the possible number of ways someone could make change.

It is possible to make 5 pence in the following ways:
5 * 1p
3 * 1p + 1 * 2p
1 * 1p + 2 * 2p
1 * 5p

In other words, find all the possible combinations of coins that sum to a given pence value.

total (required) - the number of pence

total:
1 
Output:
1
total:
17
Output:
28
*/
