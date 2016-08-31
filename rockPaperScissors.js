function rockPaperPermutation (roundCount) {
  var result = [];
  var option = 'rps';

  var loop = function(permu) {
    if (permu.length === roundCount) {
      return result.push(permu);
    } else {
      for (var i = 0; i < option.length; i++) {
        loop(permu + option[i]);
      }
    }
  };

  if (roundCount && typeof roundCount === 'number') { 
    loop(''); 
  }

  return result;
}












// Given a number of rounds n, return all the possible rock-paper-scissors
// play possibilities for that number of rounds.
// 0 -> [ ]
// 1 -> [ "r", "p", "s" ]
// 2 -> [ "rr", "rp", "rs", "pr", "pp", "ps", "sr", "sp", "ss" ]
// function rockPaperPermutation (roundCount) {
//   var results = [];
//   var options = ['r','p','s'];

//   if (typeof roundCount !== 'number'){
//     throw 'Wrong input';
//   }

//   var rps = function(permu){
//     if (permu.length === roundCount){
//       return results.push(permu);
//     }
//     for (var i = 0; i < options.length; i++){
//       rps(permu+options[i]);
//     }
//   };

//   rps('');

//   return results;
// }





// Write a function that takes up to four digits of a phone number, 
// and returns a list of all of the words that can be written on the 
// phone with that number. (You should return all permutations)
// '0002' -> [ "000A", "000B", "000C" ]
// '1123' -> [ "11AD", "11AE", "11AF", "11BD", "11BE", "11BF", "11CD", "11CE", "11CF" ]
function telephoneWords (digitString) {
  var results = [];
  var keypad = { 
    0: '0', 1: '1', 2: 'ABC', 3: 'DEF',
    4: 'GHI', 5: 'JKL', 6: 'MNO',
    7: 'PQRS', 8: 'TUV', 9: 'WXYZ'
  };

  if (digitString.length !== 4 && typeof digitString !== 'string') {
    throw "Wrong input";
  }

  var spell = function(permu) {
    if (permu.length === 4) {
      return results.push(permu);
    }

    for (var i = 0; i < keypad[digitString[permu.length]].length; i++) {
      spell(permu+keypad[digitString[permu.length]][i]); 
    }
  };

  spell('');

  return results;
}





// Find the first item that occurs an even number of 
// times in an array. Remember to handle multiple 
// even-occurrence items and return the first one. 
// Return null if there are no even-occurrence items.
// [ "cat", "dog", "dig", "cat" ] -> cat
// [ 1, 3, 3, 3, 2, 4, 4, 2, 5 ] -> 2
// ["rob","victor","fred","jess","rob","rob"] -> null
function evenOccurrence (array) {
  for (var i = 0; i < array.length; i++) {
    var clone = array.slice();
    var times = 0;

    while (clone.indexOf(array[i]) > -1) {
      clone = clone.slice(clone.indexOf(array[i]) + 1);
      times++;
    }
    
    if (times !== 0 && times % 2 === 0) {
      return array[i];
    }
  }

  return null;
}





// Given a given number of pence, return the possible 
// number of ways someone could make change.
function coinSums (total) {
  var coins = [1,2,5,10,20,50,100,200];
  var count = 0;
  
  var loop = function(pences, i) {
    if (total <= pences) {
      return total === pences ? ++count : void 0;
    }
    
    for (i; i < coins.length; i++) {
      loop(pences+coins[i], i);
    }
  };

  loop(0, 0);
  
  return count;
}





// [ ] -> 0
// [ [ [ ] ] ] -> 0
// [ [ 5 ], [ [ ] ] ]  -> 2
// [ 10, 20, 30, 40 ]  -> 1
// [ [ 10, 20 ], [ [ 30, [ 40 ] ] ] ] -> 4
function arrayception (array) {
  var count = 0;

  var loop = function(array, depth) {
    if (Array.isArray(array)) {
      for(var i = 0; i < array.length; i++)
        loop(array[i], depth+1);
    } else {
      return count = count < depth ? depth : count;
    }
  };
  
  loop(array, 0);
  
  return count;
}





// Find if the singly linked list has a cycle
function Node (val) {
  var obj = {};
  obj.value = val || null;
  obj.next = null;
  return obj;
}

function hasCycle(linkedList){
  var slow = fast = linkedList;
  var pause = 1;

  while (fast = fast.next) {
    if (fast === slow) { 
      return true; 
    }

    if (pause++ % 2 === 0) { 
      slow = slow.next; 
    }
  }

  return false;
}





// "My dad is a racecar athlete" -> "a racecar a"
// "There was a tattarrattat on the racecar. It made a funny noise, gfedcbabcdefg" -> " tattarrattat ";
function longestPalindrome (string) {
  var flip = string.split('').reverse().join('');
  var result = '';
  var length = 0;
  
  for (var i = 0; i < flip.length; i++) {
    for (var j = i + 1; j <= flip.length; j++) {
      if (string.includes(flip.slice(i,j)) && j-i > length) {
        result = flip.slice(i, j);
        length = j - i;
      }  
    }
  }
   
  return result;  
}





// "abccdefe" -> abdf
function onlyUnique (str) {
  return str.split('').filter(function(letter, i, array) {
    return array.indexOf(letter) === array.lastIndexOf(letter);
  }).join('');
}





var bind = function(func, context){
  var params = Array.prototype.slice.call(arguments, 2);

  return function(){
    var args = params.concat(Array.prototype.slice.call(arguments));
    
    return func.apply(context, args);
  };
}; 

Function.prototype.bind = function(context) {
  var params = Array.prototype.slice.call(arguments, 1);
  var func = this;
  
  return function() {
    return func.apply(context, params.concat(Array.prototype.slice.call(arguments)));
  };
};





// 70368760954879 true
// 239812076741689 false
function primeTester (n) {
  if (n < 2) {
    return false;
  } else {
    for (var i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        return false;
      }
    }
  }
  
  return true;
}





var mixEvents = function(obj) {
  var events = {};

  obj.trigger = function (event) {
    var params = Array.prototype.slice.call(arguments, 1);
    if (events[event]) {
      events[event].forEach(function(cb) {
        cb.apply(this, params);
      });
    }
  };

  obj.on = function (event, callback) {
    if (!events[event]) {
      events[event] = [callback];
    } else {
      events[event].push(callback);
    }
  };
  
  return obj;
};





var Tree = function(value){
  this.value = value;
  this.children = [];
};

Tree.prototype.countLeaves = function () {
  var count = 0;

  if (!this.children.length) {
    return 1;
  } else {
    for (var i = 0; i < this.children.length; i++) {
      var child = this.children[i];
      count += child.countLeaves();
    }

    return count;
  }
};

/**
  * You shouldn't need to change anything below here, but feel free to look.
  */

/**
  * add an immediate child
  * (wrap values in Tree nodes if they're not already)
  */
Tree.prototype.addChild = function(child){
  if (!child || !(child instanceof Tree)){
    child = new Tree(child);
  }

  if(!this.isDescendant(child)){
    this.children.push(child);
  }else {
    throw new Error("That child is already a child of this tree");
  }
  // return the new child node for convenience
  return child;
};

/**
  * check to see if the provided tree is already a child of this
  * tree __or any of its sub trees__
  */
Tree.prototype.isDescendant = function(child){
  if(this.children.indexOf(child) !== -1){
    // `child` is an immediate child of this tree
    return true;
  }else{
    for(var i = 0; i < this.children.length; i++){
      if(this.children[i].isDescendant(child)){
        // `child` is descendant of this tree
        return true;
      }
    }
    return false;
  }
};

/**
  * remove an immediate child
  */
Tree.prototype.removeChild = function(child){
  var index = this.children.indexOf(child);
  if(index !== -1){
    // remove the child
    this.children.splice(index,1);
  }else{
    throw new Error("That node is not an immediate child of this tree");
  }
};

var root = new Tree();

console.log(root.countLeaves()); // 1
root.addChild(new Tree());
console.log(root.countLeaves()); // still 1
root.addChild(new Tree());
root.children[0].addChild(new Tree());
root.children[0].addChild(new Tree());
root.children[0].children[0].addChild(new Tree());
console.log(root.countLeaves()); // 3







function sieve(start, end) {
  var array = [], primes = [];

  for (var i = 2; i <= end; i++) {
    if (!array[i]) {
      primes.push(i);

      for (var j = i << 1; j <= end; j += i) 
        array[j] = true;
    }
  }

  var range = [];

  for (var i = start; i <= end; i++) {
     range.push(i);
  }

  var result = [];

  for (var i = 0; i < range.length; i++) {
    if (primes.indexOf(range[i]) > -1) {
      result.push(range[i]);
    }
  }
  return result;
};


console.log(sieve(20, 22)); // []
console.log(sieve(1, 2)); // [2]
console.log(sieve(16, 20)); // [17, 19]








var phoneDigitsToLetters = { /* [0-9] */ };
var telephoneWords = function(digitString) {
  // Save the current words through closure scope
  var words = [];

  var lettersForDigits = function (word, digits) {
    if (digits.length === 0) {
      words.push(word);
      return;
    }

    var remainDigits = digits.slice(1);
    phoneDigitsToLetters[digits[0]].split('').forEach(function(letter) {
      lettersForDigits(word + letter, remainDigits);
    });

  };

  lettersForDigits('', digitString.split(''));
  return words;
};