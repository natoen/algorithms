/*
We have two inputs specifically the array that we will count/traverse
and our depth of the array which is defaulted to 0. Inside the function
would be only one if statement that has a return in it and a return
statement outside that if. Our condition for our if would be if our
first input is an array. We will then instantiate a result with
value 0. After that would be a recursive for-loop iterating the
contents of our array and invoking our function itself with inputs
the current element in our iteration and our current depth plus 1.
If the return value of our invoked function is greater than our
result then we will reassign it. After the loop we will just return
our result. Outside that if we will simple return our depth plainly.
*/


const arrayception = (array, depth = 0) => {
  if (Array.isArray(array)) {
    let result = 0;

    for (let i = 0; i < array.length; i++) {
      result = arrayception(array[i], depth + 1) > result ?
               arrayception(array[i], depth + 1) : result;
    }

    return result;
  }

  return depth;
};

 console.log(arrayception([[0, 20], [[30, [40]]]])); // 4

/*
Given an array of arbitrarily nested arrays, return n,
where n is the deepest level that contains a non-array value.
*/
