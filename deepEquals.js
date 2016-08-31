/*
We need to remember that we have only two inputs to compare.
Our first part would be our base case which is to detect if one
is not an object or a null. If one is then we will just directly
comapre our inputs. If neither is a null and both is an object,
we still need to check if both of them is an array or not. If one
differs (e.g. one is an array the other is not vice versa) then
we will just return a false.
Second part would be getting the keys of only either one of our
input since we know that they are objects and we assume that they
are the same. We will run a for-loop with the keys that we have
obtained, append it same to our two input objects and use them as
the new inputs of our recursive deepEquals. If a deepEquals inside
our for-loop returned a false then we will return a false.
If we succesfully get out of our for-loop then it only means that
our input has the same properties and values with our other input
whose key we acquired. To fully secure their equality, we need to
return a comparison of the length of each of their keys.
*/

function deepEquals(a, b) {
  if (a === null || typeof a !== 'object' ||
      b === null || typeof b !== 'object') {
    return (typeof a === 'function' || typeof b === 'function') ?
            Object.is(a.toString(), b.toString()) : Object.is(a, b);
  } else if (Array.isArray(a) !== Array.isArray(b)) {
    return false;
  }

  const propsB = Object.keys(b);

  for (let i = 0; i < propsB.length; i++) {
    if (!deepEquals(a[propsB[i]], b[propsB[i]])) {
      return false;
    }
  }

  return Object.keys(a).length === propsB.length;
}

const a = { foo: [2, { bar: {} }] };
const b = { foo: [2, { bar: [] }] };

deepEquals(a, b); // false


/*
Write a function that, given two objects, returns whether or not the two are deeply
equivalent–meaning the structure of the two objects is the same, and so is the structure
of each of their corresponding descendants. DO NOT use JSON.stringify.
*/


// var should = chai.should();

// describe('deepEquals()', function(){

//   it('should exist', function(){
//     should.exist(deepEquals);
//   });
//   it('should be a function', function(){
//     deepEquals.should.be.a.Function;
//   });
//   it('should take at least two arguments', function(){
//     deepEquals.length.should.be.above(1);
//   });
//   it('should return a result', function(){
//     var result = deepEquals({}, {});
//     should.exist(result);
//   });
//   it('should return a boolean', function(){
//     deepEquals({}, {}).should.be.a.Boolean;
//   });
//   it('should return true for two empty objects', function(){
//     deepEquals({}, {}).should.be.true;
//   });
//   it('distinguishes between objects and arrays', function() {
//     var a = { foo: [2, { bar: {}}]}
//     var b = { foo: [2, { bar: []}]}
//     deepEquals(a,b).should.be.false;
//   });
//   it('should use deep equality', function(){
//     var a = { foo: 1 };
//     var b = { foo: '1' };
//     deepEquals(a,b).should.be.false;
//   });
//   it('should return true for two objects with the same keys and values', function(){
//     var a = { foo: 'bar' };
//     var b = { foo: 'bar' };
//     deepEquals(a, b).should.be.true;
//   });
//   it('should return false for two objects with the same keys and but different values',
//     function(){
//     var a = { foo: 'bar' };
//     var b = { foo: 'pow' };
//     deepEquals(a, b).should.be.false;
//   });
//   it('should return false for two objects with different number of keys', function(){
//     var a = { foo: 'bar' };
//     var b = { foo: 'bar', biz: 'baz' };
//     deepEquals(a, b).should.be.false;
//   });
//   it('should return false for two objects with different number of keys', function(){
//     var a = { foo: 'bar', biz: 'baz' };
//     var b = { foo:'bar' };
//     deepEquals(a, b).should.be.false;
//   });
//   it('should return true for similar nested object properties', function(){
//     var a = { foo: 1, b: { c: 3 } };
//     var b = { foo: 1, b: { c: 3 } };
//     deepEquals(a,b).should.be.true;
//   });
//   it('should return false for dissimilar nested object properties', function(){
//     var a = { foo: 1, b: { c: 3 } };
//     var b = { foo: 1, b: { c:'potato' } };
//     deepEquals(a,b).should.be.false;
//   });
//   it('should return false for dissimilar nested object properties', function(){
//     var a = { foo: 1, b: { c: 'potato'} };
//     var b = { foo: 1, b: { c: 3 } };
//     deepEquals(a,b).should.be.false;
//   });
//   it('should return true for similar excessively nested object properties', function(){
//     var a = { foo: 1, b: { c: { d: { e: 'potato' } } } };
//     var b = { foo: 1, b: { c: { d: { e: 'potato' } } } };
//     deepEquals(a,b).should.be.true;
//   });
//   it('should return true for similar excessively nested object properties', function(){
//     var a = { b: { c: { d: { e: 'potato' } } }, foo: 1 };
//     var b = { foo: 1, b: { c: { d: { e: 'potato' } } } };
//     deepEquals(a,b).should.be.true;
//   });
// });
