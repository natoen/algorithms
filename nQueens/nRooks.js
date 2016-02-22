// See my N-Queens for a descriptive version.

var nRooks = function(n) {
  var count = 0;
  var all = Math.pow(2,n) - 1;     

  var Try = function(cols) {
    if (cols == all)
      count++;

    var poss = ~(cols) & all;

    while (poss) { 
      var bit = poss & -poss;

      poss = poss ^ bit;
      Try(cols|bit);
    }
  };

  Try(0, 0, 0);
  console.log("There are " + count + " solutions to " + n + "-Rooks problem");
};
