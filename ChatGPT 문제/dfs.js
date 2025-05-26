const graph = {
  1: [2, 3],
  2: [4, 5],
  3: [6],
  4: [],
  5: [],
  6: [],
};

function dfs(graph, start) {
  const visited = new Set();
  console.log(visited);
  const stack = [start];

  while (stack.length > 0) {
    const node = stack.pop();

    if (visited.has(node)) continue;

    console.log(node);
    visited.add(node);

    const children = graph[node];
    for (let i = children.length - 1; i >= 0; i--) {
      stack.push(children[i]);
    }
  }
}

dfs(graph, 1);
