function solution(graph, start) {
  // 그래프를 인접 리스트로 표현
  const adjList = {};
  graph.forEach(([u, v]) => {
    if (!adjList[u]) adjList[u] = [];
    adjList[u].push(v);
  });

  // 왜 u,v라고 하는걸까?

  // DFS 탐색 함수
  function dfs(node, visited, result) {
    visited.add(node); // 현재 노드를 방문한 노드들의 집합에 추가
    result.push(node); // 현재 노드를 결과 배열에 추가
    (adjList[node] || []).forEach((neighbor) => {
      // 현재 노드와 인접한 노드 순회
      if (!visited.has(neighbor)) {
        // 아직 방문하지 안흔 노드라면
        dfs(neighbor, visited, result);
      }
    });
  }

  // DFS를 순회한 결과를 반환
  const visited = new Set();
  const result = [];
  dfs(start, visited, result); // 시작 노드에서 깊이 우선 탐색 시작
  return result;
}

console.log(
  solution(
    [
      [1, 2],
      [1, 3],
      [2, 4],
      [2, 5],
      [3, 6],
      [3, 7],
    ],
    1
  )
); // [1, 2, 4, 5, 3, 6, 7]
