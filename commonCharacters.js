const commonCharacters = (string1, string2) => {
  const str1 = string1.replace(/\s/g, '').split('');
  const str2 = string2.replace(/\s/g, '').split('');
  const result = [];

  str1.forEach((item) => {
    if (str2.includes(item) && !result.includes(item)) {
      result.push(item);
    }
  });

  return result.join('');
};


/*
Common Characters
Write a function that accepts two strings as arguments,
and returns only the characters that are common to both strings.

Your function should return the common characters in the same order
that they appear in the first argument. Do not return duplicate characters
and ignore whitespace in your returned string.

Example: commonCharacters('acexivou', 'aegihobu')
Returns: 'aeiou'

var should = chai.should();

describe('Common Characters', function(){
  it('returns common characters', function(){
    commonCharacters('abc', 'abc').should.equal('abc');
  });

  it('returns common characters', function(){
    commonCharacters("What is love?", "Baby don't hurt me").should.equal('hatoe');
  });

  it('returns common characters', function(){
    commonCharacters('Riding on a buffalo makes me more approachable', 'so what').should.equal('oash');
  });

  it('returns empty string', function(){
    commonCharacters('', 'No more').should.equal('');
  });

  it('returns empty string', function(){
    commonCharacters('No more', '').should.equal('');
  });

  it('returns empty string', function(){
    commonCharacters('', '').should.equal('')
  });
});
*/
