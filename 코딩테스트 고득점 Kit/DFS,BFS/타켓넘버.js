function solution(numbers, target) {
  var answer = 0;

  return answer;
}


// 모든 경우의 합을 다 해본 후에 3인 것만 처리한다
// 타켓 넘버를 활용해서 number를 처리하는 방법

const graph = {
  A: ["B", "C"],
  B: ["A", "D"],
  C: ["A", "G", "H", "I"],
  D: ["B", "E", "F"],
  E: ["D"],
  F: ["D"],
  G: ["C"],
  H: ["C"],
  I: ["C", "J"],
  J: ["I"],
};

const DFS2 = (graph, startNode) => {
  const visited = [];
  let needVisit = [];

  needVisit.push(startNode);

  while (needVisit.length !== 0) {
    const node = needVisit.shift();
    if (!visited.includes(node)) {
      visited.push(node);
      needVisit = [...graph[node], ...needVisit];
    }
  }
  return visited;
};

const DFS = (graph, startNode) => {
  const visited = []; // 방문한 노드 기록
  const stack = []; // 탐색을 위한 스택

  stack.push(startNode); // 시작 노드를 스택에 추가

  while (stack.length !== 0) {
    const node = stack.pop(); // 스택에서 노드를 꺼냄

    if (!visited.includes(node)) {
      visited.push(node); // 방문한 노드를 기록

      // 인접 노드를 스택에 추가 (역순으로 스택에 넣어야 깊이 우선 탐색)
      stack.push(
        ...graph[node].filter((neighbor) => !visited.includes(neighbor))
      );
    }
  }

  return visited;
};

// DFS 실행
const result = DFS(graph, "A");
console.log(result); 