const treeMaker = value => {
  const newTree = Object.create(treeMaker.methods);
  newTree.value = value;
  newTree.children = [];
  return newTree;
};

treeMaker.methods = {};

treeMaker.methods.addChild = value => {
  const node = treeMaker(value);
  this.children.push(node);
};

treeMaker.methods.contains = value => {
  if (this.value === value) {
    return true;
  }

  for (let i = 0; i < this.children.length; i++) {
    if (this.children[i].contains(value)) {
      return true;
    }
  }

  return false;
};

/*
// Tree
// Someone wrote a tree implementation, but they forgot to
// finish writing the definitions for addChild and contains.
// Help this person finish their tree by adding in the missing code for these methods.

// Your Code Should Pass:
var should = chai.should();

describe("treeMaker", function() {
  it('should exist', function(){
    should.exist(treeMaker);
  });

  it('should be a function', function(){
    treeMaker.should.be.a.Function;
  });

  it('should be implemented in the prototypal style', function(){
    //Are you using Object.create()..?
    var tree = treeMaker();
    treeMaker.methods.addChild.should.be.a.Function;
    treeMaker.methods.contains.should.be.a.Function;
    tree.addChild.should.be.a.Function;
    tree.contains.should.be.a.Function;
  });


  it("should add children to the tree", function() {
    var tree = treeMaker();
    tree.addChild(5);
    tree.children[0].value.should.equal(5);
  });

  it("should return true for a value that the tree contains", function(){
    var tree = treeMaker();
    tree.addChild(5);
    tree.contains(5).should.equal(true);
  });

  it("should return false for a value that was not added", function(){
    var tree = treeMaker();
    tree.addChild(5);
    tree.contains(6).should.equal(false);
  });

  it("should be able to add children to a tree's child", function() {
    //Each child should itself be an instance of a tree.
    var tree = treeMaker();
    tree.addChild(5);
    tree.children[0].addChild(6);
    tree.children[0].children[0].value.should.equal(6);
  });

  it("should correctly detect nested children", function(){
    var tree = treeMaker();
    tree.addChild(5);
    tree.addChild(6);
    tree.children[0].addChild(7);
    tree.children[1].addChild(8);
    tree.contains(7).should.be.true;
    tree.contains(8).should.be.true;
  });
});
*/
