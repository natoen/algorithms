// Fisher-Yates
// We get a random number from a certain range
// As that range decreases or as we move along
// in it we don't care about the places we have
// left. e.g. we get a random number from 1-100,
// next time we only get from 1-99. We get a
// random number from 1-100, next time we only
// get from 2-100.

function shuffleDeck(deck) {
  const deckToShuffle = deck;

  for (let i = deck.length - 1; i > -1; i--) {
    const rand = Math.floor(Math.random() * (i + 1));
    const hold = deckToShuffle[i];

    deckToShuffle[i] = deck[rand];
    deckToShuffle[rand] = hold;
  }

  return deckToShuffle;
}


function orderedDeck() {
  const suits = ['♥', '♣', '♠', '♦'];
  const values = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];
  const deck = [];

  suits.forEach((suit) => {
    values.forEach((value) => {
      deck.push(value + suit);
    });
  });

  return deck;
}

shuffleDeck(orderedDeck());

// Shuffle Deck
// Given an array containing a deck of cards, implement a function that shuffles the deck.
// The helper function orderedDeck() is not necessary for your solution; it is provided to
// create an ordered deck if you debug your code in the console or using snippets.

// Example:

//  var deck = orderedDeck();
//  // ["A♥","2♥","3♥",...,"J♦","Q♦","K♦"]
//  shuffleDeck(deck);
//  // ["2♠","J♣","A♦", ... ,"7♣","8♣","K♠"]
// Note:
// A shuffled deck should be completely random. That means that a given card should be as
// likely as any other to appear in a given deck index, completely independent of the order
// of the input deck. Think carefully about how to be sure your algorithm generates a properly
// shuffled deck– it is easy to accidentally create a biased algorithm.

// A further note on randomness:
// Technically, a computer-shuffled deck will usually be “pseudorandom”, not “truly” random. However, the difference between the two is too small to be detectable by any known test. See http://en.wikipedia.org/wiki/Pseudorandom_number_generator
// A human shuffler is much more biased; it takes around seven normal “riffle” shuffles before a real deck is actually randomized. See https://www.dartmouth.edu/~chance/teaching_aids/books_articles/Mann.pdf

// Extra credit:
// - Even a naive algorithm can easily run in linear time. However, does your algorithm remain
// unbiased as N (the deck size) increases? How do you know?
// - Once you have created a properly random, linear algorithm, what is its space complexity?
// There is an algorithm that uses O(N) time and O(1) space (i.e., an in-place shuffle)

// var should = chai.should();

// var orderedDeck = function() {
//   var suits = [ '♥', '♣', '♠', '♦' ];
//   var values = [ 'A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K' ];
//   var deck = [];

//   suits.forEach(function(suit) {
//     values.forEach(function(value) {
//       deck.push(value + suit);
//     });
//   });

//   return deck;
// };

// describe('shuffleDeck', function() {
//   it('should exist', function(){
//     should.exist(shuffleDeck);
//   });

//   it('should be a function', function() {
//     shuffleDeck.should.be.a.Function;
//   });

//   it('should return an array', function() {
//     var result = shuffleDeck(orderedDeck());
//     should.exist(result);
//     result.should.be.an.instanceof(Array);
//   });

//   it('should return an array with every card in the deck', function(){
//     var input = orderedDeck();
//     var control = orderedDeck();
//     var result = shuffleDeck(input);
//     // check that every expected card is in the result deck
//     for (var i = 0; i < control.length; i++) {
//       result.should.contain(control[i]);
//     }
//     // check that no unexpected cards are in the result deck
//     for (var i = 0; i < result.length; i++) {
//       control.should.contain(result[i]);
//     }
//   });

//   it('should not return the deck in input order', function(){
//     var input = orderedDeck();
//     var control = orderedDeck();
//     var result = shuffleDeck(input);
//     // check that all cards are not present in the same order
//     result.should.not.eql(control);
//     // It is theoretically conceivable, but statistically impossible
//     // that this could happen randomly.
//     // (P = 1 in 52!)
//   });

//   it('should not return the deck in the same order twice', function(){
//     var input1 = orderedDeck();
//     var input2 = orderedDeck();
//     var result1 = shuffleDeck(input1);
//     var result2 = shuffleDeck(input2);

//     // check that all cards are not present in the same order
//     result1.should.not.eql(result2);
//     // It is theoretically conceivable, but statistically impossible
//     // that this could happen randomly.
//     // (P = 1 in 52!)
//   });

//   it('should not have any bias from a uniform distribution', function () {
//     // This one is tricky. We're going to verify that your algorithm returns
//     // a deck which "looks random".
//     var deck = orderedDeck();
//     // Keep a table of how often each card appears in each deck position...
//     var cardPositionCounts = {};
//     for (var i = 0; i < deck.length; i++) {
//       var cardPosition = cardPositionCounts[deck[i]] = {};
//       for (var j = 0; j < deck.length; j++) {
//         cardPosition[j] = 0;
//       }
//     }
//     // ...over the course of five hundred shuffles
//     var iterations = 52 * 10;
//     for (var i = 0; i < iterations; i++) {
//       deck = orderedDeck();
//       var randomDeck = shuffleDeck(deck);
//       for (var j = 0; j < randomDeck.length; j++) {
//         cardPositionCounts[randomDeck[j]][j] += 1;
//       }
//     }
//     // The result should not betray any obvious statistical bias.
//     deck = orderedDeck();
//     // The expected number of occurrences for a particular card in a particular index is
//     // iterations/52 = 10
//     var expected = 10,
//       chi2 = 0;
//     for (var i = 0; i < deck.length; i++) {
//       var cardPosition = cardPositionCounts[deck[i]];
//       for (var j = 0; j < deck.length; j++) {
//         // calculate chi-squared test
//         chi2 += Math.pow(cardPosition[j] - expected, 2) / expected;
//       }
//     }
//     // quick and dirty statistical test:
//     // if your shuffles are uniformly distributed, chi-squared should be roughly 52^2
//     var target = 52*52;
//     var margin = 52*10;
//     chi2.should.be.within(target - margin, target + margin);
//     return chi2;
//   });

//   it('EXTRA CREDIT (jk, this was mandatory): for large N, should not have any bias from \
//       a uniform distribution', function () {
//     // We perform this test on an array of 1000 integers.
//     // (Your function must shuffle an arbitrary array to pass this test.)
//     // If your algorithm times out here, it is not running in linear time.
//     var orderedArray = function () {
//       var output = [];
//       for (var i = 0; i < 1000; i++) {
//         output.push(i);
//       }
//       return output;
//     };
//     var deck = orderedArray();
//     // Keep a table of how often each integer appears in each array position...
//     var cardPositionCounts = {};
//     for (var i = 0; i < deck.length; i++) {
//       var cardPosition = cardPositionCounts[deck[i]] = {};
//       for (var j = 0; j < deck.length; j++) {
//         cardPosition[j] = 0;
//       }
//     }
//     // ...over the course of five thousand shuffles
//     var iterations = 1000 * 5;
//     for (var i = 0; i < iterations; i++) {
//       deck = orderedArray();
//       var randomDeck = shuffleDeck(deck);
//       for (var j = 0; j < randomDeck.length; j++) {
//         cardPositionCounts[randomDeck[j]][j] += 1;
//       }
//     }
//     // The result should not betray any obvious statistical bias.
//     deck = orderedArray();
//     // The expected number of occurrences for a particular card in a particular index is
//     // iterations/1000 = 1
//     var expected = 5,
//       chi2 = 0;
//     for (var i = 0; i < deck.length; i++) {
//       var cardPosition = cardPositionCounts[deck[i]];
//       for (var j = 0; j < deck.length; j++) {
//         // calculate chi-squared test
//         chi2 += Math.pow(cardPosition[j] - expected, 2) / expected;
//       }
//     }
//     // quick and dirty statistical test:
//     // if your shuffles are uniformly distributed, chi-squared should be roughly 1000^2
//     var target = 1000*1000;
//     var margin = 1000*10;
//     chi2.should.be.within(target - margin, target + margin);
//   });
// });
