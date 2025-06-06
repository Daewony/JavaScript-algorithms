// 연결되어있는 컴퓨터를 확인
// 하나의 네트워크의 특징: 하나를 기준으로 연결된 모든 애들을 찾아서, visited에 저장하기 -> 1개의 네트워크 성공
// 다음것을 확인하고 방문하지 않았으면 마찬가지로 진행,
// 방문했다면 넘어가기

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
  console.log(visited);

  for (let i = 0; i < n; i++) {
    // if(visited[i]) continue;
    if (!visited[i]) {
      // 방문하지 않았다면 새로운 네트워크
      answer++;
      // dfs(i);
      bfs(i);
    }
  }

  function bfs(i) {
    const queue = new Queue();
    queue.push(i);
    visited[i] = true;

    while (queue.length > 0) {
      const node = queue.pop();
      for (let j = 0; j < n; j++) {
        if (computers[node][j] === 1 && !visited[j]) {
          visited[j] = true;
          queue.push(j);
        }
      }
    }
  }

  function dfs(start) {
    let i = start;
    visited[i] = true;
    // 연결된 애들 방문 처리
    for (let j = 0; j < n; j++) {
      // if(i===j) continue;
      if (computers[i][j] === 1 && !visited[j]) {
        // visited[j]=true;
        dfs(j);
      }
    }
  }
  return answer;
}
