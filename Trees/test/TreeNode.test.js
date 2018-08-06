var chai = require('chai');
var expect = chai.expect;
var TreeNode = require ('../TreeNode');

describe.only('The Node Based tree', () => {

  let args = {
    data: 1000
  }

  let node = new TreeNode(args);

  it('... can create a new node', () => {
    expect(node instanceof TreeNode).to.eql(true)
  });
    
  it('... has a data property', () => {
    expect(node).to.have.property('data')
      .to.eql(data)
  });

  it('... has a parnet property', () => {
    expect(node).to.have.property('parent')
      .to.eql()
  });

  it('... has a left (child) property', () => {
    expect(node).to.have.property('left')
  });

  it('... has a right (child) property', () => {
    expect(node).to.have.property('right')
  });

  it('... can show it`s data', () => {
    expect(node.show).to.eql(data)
  });

});