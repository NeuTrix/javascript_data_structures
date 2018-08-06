let chai = require('chai');
let expect = chai.expect;
let Graph = require('../Graph');

describe.only('The basic Graph class', () => {

  let verts = ['a', 'b', 'c', 'd', 'e']
  let graph = new Graph(verts)

  it('...creates a new Graph instance', () => {
    expect(graph instanceof Graph).to.eql(true);
  });

  it('... has a vertices property', () => {
    expect(graph).to.have.property('verts')
  });

  it('... has and edges counter', () => {
    expect(graph).to.have.property('edges')
      .to.be.a('number')  
  });

  it('... has an adjacents map', () => {
    let adj = graph.adjList;
    expect(adj instanceof Map).to.eql(true)
    expect(adj.size).to.eql(verts.length)
    // console.log(adj)
  });

});

describe.only('=> the basic Graph Methods', () => {
  let verts = ['a', 'b', 'c', 'd', 'e'];
  let graph = new Graph(verts);

  describe('=> the #addEdge method', () => {
    let edgesBefore = graph.edges
    graph.addEdge('a','e')
    let adjSizeA = graph.adjList.get('a').size
    let adjSizeE = graph.adjList.get('e').size
    // console.log(graph)
    it('... can add an edge between two verts', () => {
      expect(adjSizeA).to.eql(1)
      expect(adjSizeE).to.eql(1)
    });
    
    xit('... the edge counter increments', () => {
      expect(graph.edges).to.eql(edgesBefore + 1)
    });

    it('... will not duplicate or falsely incr. edges', () => {
      graph.addEdge('a', 'e')
      let adjSizeA = graph.adjList.get('a').size
      let adjSizeE = graph.adjList.get('e').size
      expect(adjSizeA).to.eql(1)
      expect(adjSizeE).to.eql(1)
      expect(graph.edges).to.eql(edgesBefore + 1)
    });

  });

  xdescribe('=> the #bfs method (breadth first search)', () => {
    
  });

  xdescribe('=> the #dfs method (depth first search)', () => {
    
  });

 });