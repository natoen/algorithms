// See my N-Queens for a descriptive version.

function nRooks(n) {
  let count = 0;
  const all = Math.pow(2, n) - 1;

  function solve(cols) {
    if (cols === all) {
      count++;
    }

    let poss = ~(cols) & all;

    while (poss) {
      const bit = poss & -poss;

      poss = poss ^ bit;
      solve(cols | bit);
    }
  }

  solve(0, 0, 0);
  // console.log(`There are ${count} solutions to ${n}-Rooks problem`);
}

nRooks(4);
