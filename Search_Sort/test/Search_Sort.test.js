let chai = require('chai');
let expect = chai.expect;
let {Search, Sort} = require('../Search_Sort/Search_Sort');

describe('The binarySearch method', () => {
  
  let search = new Search();
  let arr2= [10,25,31,42,51,68,78,89,99,100]

  it('... can make an instance with binary fn access', () => {
    expect(search instanceof Search).to.eql(true);
    expect(search).to.have.property('binary')
      .to.be.a('function')
  });


  it('... can find the index of a search item', () => {
    let test1 = search.binary(arr2,100)
    expect(test1).to.eql(9)
    let test2 = search.binary(arr2,31)
    expect(test2).to.eql(2)
    let test3 = search.binary(arr2,68)
    expect(test3).to.eql(5)
    let test4 = search.binary(arr2,78)
    expect(test4).to.eql(6)
    let test5 = search.binary(arr2,89)
    expect(test5).to.eql(7)
    let test6 = search.binary(arr2,99)
    expect(test6).to.eql(8)
  });

  xit('... can reverse an array', () => {
    let test  = binary(arr,100);
    expect(test).to.eql([10,25,31,42,51,68,78,89,99,100])
  });
});

xdescribe('The Sort Class', () => {
  let sort = new Sort()
  it('... makes a search instance', () => {
    expect(sort instanceof Sort).to.eql(true);
  });

  it('... has a quick sort algorithm', () => {
    let arr = [42, 51, 89, 99, 100, 68, 78, 10, 25, 31]
    let arr2 = [10, 25, 31, 42, 51, 68, 78, 89, 99, 100]
    let test = sort.quick(arr)
    expect(test(arr)).to.eql(arr2)
  });
  
});