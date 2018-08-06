let chai = require('chai');
let expect = chai.expect;
let Graph = require('../basicGraph');

describe('The basic Graph class', () => {
  let verts = ['a','b','c','d','e']   
  let graph = new Graph(verts)

  it('...creates a new Graph instance', () => {
    expect(graph instanceof Graph).to.eql('true');
  });


});