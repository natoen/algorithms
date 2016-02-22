// See my N-Queens for a descriptive version.

var nSuper = function(n) {
  var count = 0;
  var all = Math.pow(2,n) - 1;     

  var Try = function(ld, cols, rd,　hl, vl) {  // hl = horizontal L
    if (cols == all)
      count++;

    var poss = ~(ld | cols | rd) & ~(hl >> 2) & ~(hl << 2) & 
               ~(vl >> 1) & ~(vl << 1) & all;

    while (poss) { 
      var bit = poss & -poss;

      poss = poss ^ bit;
      Try((ld|bit) << 1, cols|bit, (rd|bit) >> 1, bit, hl);
    }
  };

  Try(0, 0, 0);
  console.log("There are " + count + " solutions to " + n + "-Super Queens problem");
};

