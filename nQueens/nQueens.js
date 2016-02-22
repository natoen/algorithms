// This is a Javascript translation of the N-Queens program from
// http://www.cl.cam.ac.uk/~mr10/backtrk.pdf
// The program starts from the bottom right of the chess board with the left
// diagonal coming from the same position to the upper left.

var nQueens = function(n) {
  // number of non-unique queens position where they can't hit each other
  // We've put it outside our 'Try' so it won't get caught in the recursion.
  var count = 0;

  // size of our board & bit pattern which represents
  // the places our queens need to occupy
  var all = Math.pow(2,n) - 1;     

  // engine
  // 'ld', 'cols', and 'rd' are our flags for our queen's 
  // left diagonal, vertical, right diagonal movement
  var Try = function(ld, cols, rd) {

    // If all of 'cols' bits has been successfully flipped
    // from 0 to 1 then we'll count it as one non-unique position.
    if (cols == all)
      count++;

    // The 1's in (ld | cols | rd) represents
    // the position we can't place a queen on
    // thus NOTing it and ANDing it with 'all' 
    // will give us the safe places to place a queen.
    var poss = ~(ld | cols | rd) & all;

    // we will reiterate until all our possible places are spent.
    while (poss) { 
      // ANDing 'poss' with its negation (2's complement) will lead 
      // us to the least significant one (very first 1 from the right)
      // which we'll be our current bitmask (queen's position) use for testing. 
      var bit = poss & -poss;

      // We'll clear the particular bit that we'll use as our current bitmask
      // using XOR '^' which is also equivalent to '-=' if that's more intuitive.
      poss = poss ^ bit;

      // We'll test if our current bitmask could lead us a non-unique solution.
      // In our next row we'll not be able to place a queen in the same column 
      // and also to the squares beside it. Remember that we only care about the next row.
      Try((ld|bit) << 1, cols|bit, (rd|bit) >> 1);
    }
  };

  // start
  Try(0, 0, 0);
  console.log("There are " + count + " solutions to " + n + "-Queens problem");
};


// // This is a simulation of N-Queens 4x4. I made this to  
// // make sure my brain is in-lined with what the code is doing.  
// // Uncomment the code below to help you read it.

// all   = Math.pow(2,4) - 1 = 15
// count = 0

// Try(0000, 0000, 0000) {
//   if(false)
//   poss = ~(ld | cols | rd) & all = 1111 

//   /******* main while loop *******/
//   // We will reiterate four times here
//   while(poss) {            
//     // 1st poss iteration
//     bit  = poss & -poss = 0001 // The bit is where we are putting our queen.
//     poss = poss ^ bit = 1110 　// The poss after the bit tells us if we are
//                               // still going back to the 'while' above it. 

//     Try(0010, 0001, 0000) {
//       if(false)
//       poss1 = 1100 // The poss after the 'if' tells us the position(s) where we could
//                    // place our queen which is totally different with the poss above it.

//       while(poss1) {
//         // 1st poss1 iteration
//         bit1  = 0100
//         poss1 = 1000 　

//         Try(1100, 0101, 0010) {
//           if(false)
//           poss1A = 0000

//           while(false)
//         }
        
//         // 2nd poss1 iteration
//         bit1  = 1000 
//         poss1 = 0000

//         Try(0100, 1001, 0100) {
//           if(false)
//           poss1B = 0010

//           while(poss1B) {
//             bit1B  = 0010
//             poss1B = 0000

//             Try(1100, 1011, 0011) {
//               if(false)
//               poss1Ba = 0000

//               while(false)
//             }
//           }          
//         }
//       }
//     }

//     // 2nd poss iteration
//     bit = 0010
//     poss = 1100

//     Try(0100, 0010, 0001) {
//       if(false)
//       poss2 = 1000

//       while(poss2) {
//         bit2  = 1000
//         poss2 = 0000

//         Try(1000, 1010, 0100) {
//           if(false)
//           poss2A = 0001

//           while(poss2A) {
//             bit2A  = 0001
//             poss2A = 0000

//             Try(0010, 1011, 0010) {
//               if(false)
//               poss2Aa = 0100

//               while(poss2Aa) {
//                 bit2Aa  = 0100
//                 poss2Aa = 0000

//                 Try(1100, 1111, 0011) {
//                   if(true) /********* 1ST non-unique SOLUTION ********/
//                   poss2Aaa = 0000

//                   while(false)
//                 }
//               }
//             }
//           }
//         }
//       }
//     }

//     // 3rd poss iteration
//     bit = 0100
//     poss = 1000

//     Try(1000, 0100, 0010) {
//       if(false)
//       poss3 = 0001

//       while(poss3) {
//         bit3  = 0001
//         poss3 = 0000

//         Try(0010, 0101, 0001) {
//           if(false)
//           poss3A = 1000

//           while(poss3A) {
//             bit3A  = 1000
//             poss3A = 0000

//             Try(0100, 1101, 0100) {
//               if(false)
//               poss3Aa = 0010

//               while(poss3Aa) {
//                 bit3Aa  = 0010
//                 poss3Aa = 0000

//                 Try(1100, 1111, 0011) {
//                   if(true) /******** 2ND non-unique SOLUTION ********/
//                   poss3Aaa = 0000

//                   while(false)
//                 }
//               }
//             }
//           }
//         }
//       }
//     }

//     // Last poss iteration
//     bit = 1000
//     poss = 0000

//     Try(0000, 1000, 0100) {
//       if(false)
//       poss4 = 0011

//       while(poss4) {
//         // 1st poss4 iteration
//         bit4  = 0001
//         poss4 = 0010

//         Try(0010, 1001, 0010) {
//           if(false)
//           poss4A = 0100

//           while(poss4A) {
//             bit4A  = 0100
//             poss4A = 0000

//             Try(1100, 1101, 0011) {
//               if(false)
//               poss4Aa = 0000

//               while(false)
//             }
//           }
//         }

//         // 2nd poss4 iteration
//         bit4  = 0010
//         poss4 = 0000

//         Try(0100, 1010, 0011) {
//           if(false)
//           poss4A = 0000

//           while(false)
//         }
//       }
//     }
//   }
// }