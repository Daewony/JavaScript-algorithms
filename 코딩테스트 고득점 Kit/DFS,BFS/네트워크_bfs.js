// 핵심 키워드:
// 알고리즘:
// 자료구조: 이미 연결되어있는 네트워크라는 방문 여부 배열,
// 시간복잡도:

// 목표: 네트워크의 개수
// 조건: 직접연결 or 간접 연결되어있어야 하나의 네트워크로 봄
// 어떤 컴퓨터와 연결되어있는지를 알아야함
// 하나의 네트워크 -> 하나의 dfs로

// 방문 여부를 어떻게 표시하지?

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

function solution(n, computers) {
  let answer = 0;

  const visited = new Array(n).fill(false);
  const q = new Queue();

  function bfs(current) {
    q.push(current);

    // 연결되어있는 것을 visited 처리
    while (q.length > 0) {
      const c = q.pop();

      if (visited[c]) continue;

      visited[c] = true;
      for (let nx = 0; nx < n; nx++) {
        if (computers[c][nx] === 1 && !visited[nx]) {
          q.push(nx);
        }
      }
    }
  }

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      answer += 1;
      bfs(i);
    }
  }

  return answer;
}
