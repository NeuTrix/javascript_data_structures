let chai = require('chai');
let expect = chai.expect;

let quick = require('../quickSort')

describe('The quickSort function', () => {
  let arr = [14, 5, 19, 22, 4, 8, 11, 2, 30, 12]
  let ans = [2, 4, 5, 8, 11, 12, 14, 19, 22, 30]

  it('... sorts an array', () => {
    expect(quick(arr)).to.eql(ans)
  });




});