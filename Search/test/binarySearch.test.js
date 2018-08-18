let chai = require('chai');
let expect = chai.expect;

let binary = require('../binarySearch')

describe('The binary search function', () => {
  let tgt = 32
  let arr =[]
  for (let i = 0; i <= tgt; i++) {
    arr[i]=i
  }
  
  // let arr = [10, 30, 33, 45, 55, 69, 78, 99]

  it('... is a function', () => {
    expect(binary).to.be.a('function')
  });

  it('... finds index of the search item on the RIGHT', () => {
    let test = binary(24, arr)
    expect(test).to.eql(24)
  });

  it('... finds index of the search item on the LEFT', () => {
    let test = binary(2, arr)
    expect(test).to.eql(2)
  });

  it('... returns the index of the search item at FRONT', () => {
    let test = binary(0, arr)
    expect(test).to.eql(0)
  });
  
  it('... returns the index of the search item at END', () => {
    let test = binary(32, arr)
    expect(test).to.eql(32)
  });
  
  it('... returns -1 for a missing number', () => {
    let test = binary(99, arr)
    expect(test).to.eql(-1)
  });


});