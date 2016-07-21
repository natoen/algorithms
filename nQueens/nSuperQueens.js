// See my N-Queens for a descriptive version.

function nSuperQueens(n) {
  let count = 0;
  const all = Math.pow(2, n) - 1;

  function solve(ld, cols, rd, hl, vl) {  // hl = horizontal L
    if (cols === all) {
      count++;
    }

    let poss = ~(ld | cols | rd) & ~(hl >> 2) & ~(hl << 2) &
               ~(vl >> 1) & ~(vl << 1) & all;

    while (poss) {
      const bit = poss & -poss;

      poss = poss ^ bit;
      solve((ld | bit) << 1, cols | bit, (rd | bit) >> 1, bit, hl);
    }
  }

  solve(0, 0, 0);
  // console.log(`There are ${count} solutions to ${n}-SuperQueens problem`);
}

nSuperQueens(4);

