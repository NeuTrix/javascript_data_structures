var chai = require('chai')
var expect = chai.expect;
var TreeNode = require ('../Tree-Node')

describe.only('The Node Based tree', () => {

  let options = {
    leftChild: 900,
    data: "jim",
    rightChil: 700,
  }
  let node = new TreeNode(options)

  it('... can create a new node', () => {
    expect(node instanceof TreeNode).to.eql(true)
  });
    
  it('... has a data property', () => {
    expect(node).to.have.property('data')
  });
  it('... has a leftChild property', () => {
    expect(node).to.have.property('leftChild')
  });
  it('... has a rightChild property', () => {
    expect(node).to.have.property('rightChild')
  });

  it.only('... has the correct left child', () => {
    expect(node.leftChild).to.eql(900)
  });



});