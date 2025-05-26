const graph = {
  1: [2, 3],
  2: [4, 5],
  3: [6],
  4: [],
  5: [],
  6: [],
  7: [],
};

class Queue {
  items = [];
  front = 0;
  rear = 0;

  push(item) {
    this.items.push(item);
    this.rear++;
  }

  pop() {
    return this.items[this.front++];
  }

  get length() {
    return this.rear - this.front;
  }
}

function bfs(graph, start) {
  const visited = new Set();
  const queue = new Queue();
  queue.push(start);

  while (queue.length > 0) {
    const node = queue.pop();

    if (visited.has(node)) continue;

    console.log(node);
    visited.add(node);

    for (const neighbor of graph[node]) {
      console.log("nei", neighbor);
      queue.push(neighbor);
      console.log("q", queue);
    }
  }
}
bfs(graph, 1);
