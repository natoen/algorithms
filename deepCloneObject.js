var deepCloneObject = function(object){
  var clone;

  if(typeof object === 'object'){
    if(Array.isArray(object)){
      clone = [];
      for(var i = 0; i < object.length; i++)
        clone[i] = deepCloneArray(object[i]);
    } else {
      clone = {};
      for(var prop in object)
        clone[prop] = deepCloneArray(object[prop]);
    }
  } else if(typeof object === 'function'){
    throw 'Invalid input';
  } else
    return object;

  return clone;
};