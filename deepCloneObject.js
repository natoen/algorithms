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

function deepCloneObjects(a, b) {
  if (a === null || typeof a !== 'object' ||
      b === null || typeof b !== 'object') {
    return (typeof a === 'function' || typeof b === 'function') ?
            Object.is(a.toString(), b.toString()) : Object.is(a, b);
  } else if (Array.isArray(a) !== Array.isArray(b)) {
    return false;
  }

  const propsB = Object.keys(b);

  for (let i = 0; i < propsB.length; i++) {
    if (!deepCloneObjects(a[propsB[i]], b[propsB[i]])) {
      return false;
    }
  }

  return Object.keys(a).length === propsB.length;
}

const a = { foo: [2, { bar: {} }] };
const b = { foo: [2, { bar: [] }] };

deepCloneObjects(a, b); // false

