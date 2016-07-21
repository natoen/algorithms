// This is a Javascript translation of the N-Queens algorithm from
// http://www.cl.cam.ac.uk/~mr10/backtrk.pdf
// The algorithm starts from the bottom right of the chess board with the left
// diagonal coming from the same position to the upper left.

function nQueens(n) {
  // number of non-unique queens position where they can't hit each other
  // We've put it outside our 'solve' so it won't get caught in the recursion.
  let count = 0;

  // size of our board & bit pattern which represents
  // the places our queens need to occupy
  // if n = 4, radix-2 representation would be 1111
  const all = Math.pow(2, n) - 1;

  // engine
  // 'ld', 'cols', and 'rd' are our flags for our queen's
  // left diagonal, vertical, right diagonal movement
  // the 'solve' here is the 'try' in the original code (link above)
  function solve(ld, cols, rd) {
    // If all of 'cols' bits has been successfully flipped from 0 to 1
    // (if n = 4, cols = 1111) then we'll count it as one non-unique position.
    if (cols === all) {
      count++;
    }

    // The 1's in (ld | cols | rd) represents
    // the position we can't place a queen on
    // thus NOTing it and ANDing it with 'all'
    // will give us the safe places to place a queen.
    // starting would be ~(0000 | 0000 | 0000) & 1111 = 1111
    let pstn = ~(ld | cols | rd) & all;

    // we will reiterate until all our pstnible places are spent.
    // pstn at the start would be 1111
    while (pstn) {
      // ANDing 'pstn' with its negation (2's complement) will lead
      // us to the least significant one (very first 1 from the right)
      // which we'll be our current bitmask (queen's position) use for testing.
      // starting pstn 2's complement would be 0001
      const bit = pstn & -pstn;

      // We'll clear the particular bit that we'll use as our current bitmask
      // using XOR '^' which is also equivalent to '-=' if that's more intuitive.
      // 1111 ~ 0001 would be 1110, decreasing an iteration in this while loop
      pstn = pstn ^ bit;

      // We'll test if our current bitmask could lead us a non-unique solution.
      // In our next row we'll not be able to place a queen in the same column
      // and also to the squares beside it. Remember that we only care about the next row.
      solve((ld | bit) << 1, cols | bit, (rd | bit) >> 1);
    }
  }

  // invoke
  solve(0, 0, 0);
  // console.log(`There are ${count} solutions to ${n}-Queens problem`);
}

nQueens(4);


// Uncomment the code below to help you read it.
// Conventions:
//   - every column iteration is numbered (e.g. 1, 2, 3, 4, etc)
//   - first 'solve' in an iteration will be labeled as 1A,
//     a solve within that solve will be 1Aa, 1Aaa, etc
//   - second 'solve' in an iteration will be labeled as 1B


// all   = Math.pow(2, 4) - 1 = 15
// count = 0

// solve(0000, 0000, 0000) {
//   if(false)
//   pstn = ~(ld | cols | rd) & all = 1111

//   /******* main while loop *******/
//   // We will reiterate four times here
//   while(pstn) {
//     // 1st pstn iteration
//     bit  = pstn & -pstn = 0001 // The bit is where we are putting our queen.
//     pstn = pstn ^ bit = 1110   // The pstn after the bit tells us if we are
//                                // still going back to the 'while' above it.

//     solve(0010, 0001, 0000) {
//       if(false)
//       pstn1 = 1100 // The pstn after the 'if' tells us the position(s) where we could
//                    // place our queen which is totally different with the pstn above it.

//       while(pstn1) {
//         // 1st pstn1 iteration
//         bit1  = 0100
//         pstn1 = 1000

//         solve(1100, 0101, 0010) {
//           if(false)
//           pstn1A = 0000

//           while(false)
//         }

//         // 2nd pstn1 iteration
//         bit1  = 1000
//         pstn1 = 0000

//         solve(0100, 1001, 0100) {
//           if(false)
//           pstn1B = 0010

//           while(pstn1B) {
//             bit1B  = 0010
//             pstn1B = 0000

//             solve(1100, 1011, 0011) {
//               if(false)
//               pstn1Ba = 0000

//               while(false)
//             }
//           }
//         }
//       }
//     }

//     // 2nd pstn iteration
//     bit = 0010
//     pstn = 1100

//     solve(0100, 0010, 0001) {
//       if(false)
//       pstn2 = 1000

//       while(pstn2) {
//         bit2  = 1000
//         pstn2 = 0000

//         solve(1000, 1010, 0100) {
//           if(false)
//           pstn2A = 0001

//           while(pstn2A) {
//             bit2A  = 0001
//             pstn2A = 0000

//             solve(0010, 1011, 0010) {
//               if(false)
//               pstn2Aa = 0100

//               while(pstn2Aa) {
//                 bit2Aa  = 0100
//                 pstn2Aa = 0000

//                 solve(1100, 1111, 0011) {
//                   if(true) /********* 1ST non-unique SOLUTION ********/
//                   pstn2Aaa = 0000

//                   while(false)
//                 }
//               }
//             }
//           }
//         }
//       }
//     }

//     // 3rd pstn iteration
//     bit = 0100
//     pstn = 1000

//     solve(1000, 0100, 0010) {
//       if(false)
//       pstn3 = 0001

//       while(pstn3) {
//         bit3  = 0001
//         pstn3 = 0000

//         solve(0010, 0101, 0001) {
//           if(false)
//           pstn3A = 1000

//           while(pstn3A) {
//             bit3A  = 1000
//             pstn3A = 0000

//             solve(0100, 1101, 0100) {
//               if(false)
//               pstn3Aa = 0010

//               while(pstn3Aa) {
//                 bit3Aa  = 0010
//                 pstn3Aa = 0000

//                 solve(1100, 1111, 0011) {
//                   if(true) /******** 2ND non-unique SOLUTION ********/
//                   pstn3Aaa = 0000

//                   while(false)
//                 }
//               }
//             }
//           }
//         }
//       }
//     }

//     // Last pstn iteration
//     bit = 1000
//     pstn = 0000

//     solve(0000, 1000, 0100) {
//       if(false)
//       pstn4 = 0011

//       while(pstn4) {
//         // 1st pstn4 iteration
//         bit4  = 0001
//         pstn4 = 0010

//         solve(0010, 1001, 0010) {
//           if(false)
//           pstn4A = 0100

//           while(pstn4A) {
//             bit4A  = 0100
//             pstn4A = 0000

//             solve(1100, 1101, 0011) {
//               if(false)
//               pstn4Aa = 0000

//               while(false)
//             }
//           }
//         }

//         // 2nd pstn4 iteration
//         bit4  = 0010
//         pstn4 = 0000

//         solve(0100, 1010, 0011) {
//           if(false)
//           pstn4B = 0000

//           while(false)
//         }
//       }
//     }
//   }
// }
