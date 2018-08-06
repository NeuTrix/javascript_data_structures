class Graph {
  constructor (verts = []) {
    this.verts = verts; // array of vertices
    this.edges = 0; // edge counter
    this.adjList = new Map(); //  adjacencies list

    verts.forEach(vert => { // auto-populate initial adj-list
      this.adjList.set(vert, new Set())
    })
  }
  // add a new edge to the graph
  addEdge (v,w) { // two vertices
    let v_Set = this.adjList.get(v)
    let w_Set = this.adjList.get(w)
    if (!v_Set.has(w) && !w_Set.has(v)) {
      v_Set.add(w);
      w_Set.add(v);
      this.edges ++;
      return true
    }
    return false
  }

  // #dfs
  // #bfs
  // #shortestPath
  // #removeEdge
  
}


module.exports = Graph;