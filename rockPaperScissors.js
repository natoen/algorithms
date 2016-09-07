const rockPaperPermutation = (roundCount, permu = '') => {
  const option = 'rps';
  let result = [];

  if (roundCount === permu.length) {
    return roundCount ? [permu] : [];
  }

  for (let i = 0; i < option.length; i++) {
    result = result.concat(rockPaperPermutation(roundCount, permu + option[i]));
  }

  return result;
};


/*
Rock Paper Permutation
Given a number of rounds n, return all the possible rock-paper-scissors play
possibilities for that number of rounds.

roundCount:
1
answer:
[ "r", "p", "s" ]

roundCount:
2
answer:
[ "rr", "rp", "rs", "pr", "pp", "ps", "sr", "sp", "ss" ]

roundCount:
0
answer:
[ ]
*/
