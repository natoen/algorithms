Array.prototype.isSubsetOf = function(inputArray) {
  return this.reduce(function(prev, curr, i, array) {
    return inputArray.includes(curr) && prev;
  }, true);
};


/*
Is Subset Of
Make an array method that can return whether or not a context array is a subset of an input array.
To simplify the problem, you can assume that both arrays will contain only strings.


var should = chai.should();

describe('isSubsetOf', function(){
  it('should exist', function(){
    should.exist([].isSubsetOf);
  });

  it('should be a function', function(){
    [].isSubsetOf.should.be.a.Function;
  });

  it('should return a value', function(){
    var result = [].isSubsetOf([1, 2, 2]);
    should.exist(result);
  });

  it('should return true if all of the elements in the first array are in the second', function(){
    var result = ['cat', 'dog', 'cow'].isSubsetOf(['dog', 'cow', 'fox', 'cat']);
    result.should.equal(true);
  });

  it('should return false if not all of the elements in the first array are in the second', function(){
    var result = ['cat', 'dog', 'cow'].isSubsetOf(['dog', 'cow', 'fox']);
    result.should.equal(false);
  });

  it('should disregard duplicates', function(){
    ['cat', 'cat', 'dog'].isSubsetOf(['cat', 'dog']).should.equal(true);
    ['cat', 'dog'].isSubsetOf(['cat', 'cat', 'dog']).should.equal(true);
    ['cat', 'cat', 'dog'].isSubsetOf(['cat']).should.equal(false);
  });

  it('should disregard order', function(){
    ['cat' , 'dog'].isSubsetOf(['dog', 'cat']).should.equal(true);
  });

  it('should handle mixed arrays', function(){
    [1, 'cat', 3].isSubsetOf([4, 3, 'cat', 1]).should.equal(true);
    [1, 'cat', 3].isSubsetOf([4, 'cat', 1]).should.equal(false);
  });
});
*/
