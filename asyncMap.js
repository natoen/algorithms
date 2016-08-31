// const asyncMap = (tasks, callback) => {
//   Promise.all(tasks.map(task => new Promise(task))).then(res => {
//     callback(res);
//   });
// };

const asyncMap = (tasks, callback) => {
  const results = [];
  let count = 0;

  const order = (i) =>
    (val) => {
      results[i] = val;
      ++count === tasks.length ? callback(results) : '';
    };

  tasks.forEach((task, i) => {
    task(order(i));
  });
};


asyncMap([
  (cb) => {
    setTimeout(() => {
      cb('one');
    }, 200);
  },
  (cb) => {
    setTimeout(() => {
      cb('two');
    }, 100);
  }],
  (results) => {
    // the results array will equal ['one','two'] even though
    // the second function had a shorter timeout.
    console.log(results); // ['one', 'two']
  });


/*
Async Map
Implement the function asyncMap:

asyncMap has two parameters, an array of asynchronous functions (tasks) and a callback.
Each of the tasks takes a separate callback and invokes that callback when complete.

The callback passed to asyncMap is then performed once on the array of results of the
callbacks of the tasks.

The order of these results should be the same as the order of the tasks.
It is important to note that this is not the order in which the tasks return,
but the order in which they are passed to asyncMap.

Once all the callbacks of the tasks are returned, asyncMap should invoke the callback
on the results array.


chai.should();

describe('asyncMap', function() {

  it('should exist', function() {
    expect(asyncMap).toBeDefined();
  });

  it('should be a function', function() {
    asyncMap.should.be.a.Function;
  });

  it('should take two arguments', function() {
    asyncMap.length.should.equal(2);
  });

  it('should pass the completed tasks to its callback', function(done){

    // These functions aren't really asynchronous, but for the purposes of testing it works.
    function wait2For2(callback){
      Test.setTimeout(function () {
        callback(2);
      }, 200, done.fail);
    }

    function wait3For1(callback){
      Test.setTimeout(function() {
        callback(1);
      }, 300, done.fail);
    }

    var res;
    asyncMap([wait2For2, wait3For1], function(arr){
      res = arr;
      This should work regardless of order because of
      the time it takes to execute these 2 functions
      
      res.should.deep.equal([2,1]);
      res.length.should.equal(2);
      done();
    });

  });

  it('should pass the completed tasks to its callback in the correct order', function(done) {

    function wait2For2(callback){
      Test.setTimeout(function() {
        callback(2);
      }, 200, done.fail);
    }

    function wait3For1(callback){
      Test.setTimeout(function() {
        callback(1);
      }, 300, done.fail);
    }

    var res;
    asyncMap([wait3For1, wait2For2], function(arr){
      res = arr;
      res.should.deep.equal([1,2]);
      done();
    });

  });

  it('should handle more than two async functions in the correct order', function(done) {
    function wait2For2(callback){
      Test.setTimeout(function() {
        callback(2);
      }, 200, done.fail);
    }

    function wait5For4(callback){
      Test.setTimeout(function() {
        callback(4);
      }, 500, done.fail);
    }

    function wait1For3(callback){
      Test.setTimeout(function() {
        callback(3);
      }, 100, done.fail);
    }

    function wait3For1(callback){
      Test.setTimeout(function() {
        callback(1);
      }, 300, done.fail);
    }

    function wait1For5(callback){
      Test.setTimeout(function() {
        callback(5);
      }, 100, done.fail);
    }

    var res;
    asyncMap([wait3For1, wait2For2, wait1For3, wait5For4, wait1For5], function(arr){
      res = arr;
      res.should.deep.equal([1,2,3,4,5]);
      done();
    });

  });
});
*/
