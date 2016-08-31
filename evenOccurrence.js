const evenOccurrence = (arr) => {
  const storage = {};

  for (let i = 0; i < arr.length; i++) {
    let j = 1;
    let index = i;

    while (!storage[arr[i]] && arr.includes(arr[i], index + 1)) {
      j++;
      index = arr.indexOf(arr[i], index + 1);
    }

    storage[arr[i]] = storage[arr[i]] || true;

    if (j % 2 === 0) return arr[i];
  }

  return null;
};


evenOccurrence([1, 3, 3, 3, 2, 4, 4, 2, 5]); // 2


/*
Even Occurrence
Find the first item that occurs an even number of times in an array.
Remember to handle multiple even-occurrence items and return the first one.
Return null if there are no even-occurrence items.

arr:
[ 1, 3, 3, 3, 2, 4, 4, 2, 5 ] 2
arr:
[ "cat", "dog", "dig", "cat" ]  "cat"
*/
