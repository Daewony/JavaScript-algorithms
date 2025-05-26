// 맵에 대한 제공이 있는가?
// 현재, 시작 위치는?
// 맵의 벽은 어떻게 되어있는가? 1? false?
// 동서남북 이동

// 빨리 도착하기 -> 최단 거리 문제 -> BFS
// BFS말고는 최단거리를 풀수없는건가?

// 목표: 도착가능함 -> 최소로 이동해야하는 값 리턴
// 도착 불가능 -> -1 리턴,
// 도착 불가능의 조건: BFS를 다 돌아도 도착하지 못하면됨
// map : 0은 벽 / 1은 벽 없음

// BFS: 알고리즘?
// 근거: 최단거리
// 자료구조: 큐
// 궁금증: 최단거리는 전부 BFS로 하면되는건가?
// DFS로는 안되는 이유: 최단거리를 보장하지 못하기 때문임

// 방문 여부를 확인안함 -> 또 큐에 넣을 수 있음
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

function solution(maps) {
  let answer = 1;
  const row = maps.length;
  const col = maps[0].length;
  const visited = Array.from({ length: row }, () => new Array(col).fill(false));
  // 현재 위치 관련 정보
  const q = new Queue();
  q.push([0, 0, answer]); // y,x,이동칸

  // 상대방 진영에 갈수 없다면 -1 리턴
  if (maps[row - 1][col - 2] === 0 && maps[row - 2][col - 1] === 0) {
    return -1;
  }

  // bfs를 통해 이동을 할수있게 구성
  while (q.length > 0) {
    // 현재 위치 받기
    const [y, x, move] = q.pop();

    // 종료 조건
    if (y === row - 1 && x === col - 1) {
      return move;
    }

    // 동서 남북으로 이동하게 해야함
    let dx = [0, 1, 0, -1];
    let dy = [1, 0, -1, 0];

    // 다음 이동경로 이동가능한지 보기
    for (let i = 0; i < dx.length; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];
      // 동서남북 이동 가능 여부
      if (ny >= 0 && nx >= 0 && ny < row && nx < col) {
        // 벽이 아닌지 확인
        if (maps[ny][nx] === 1) {
          // 이미 방문한 곳이 아닌지 확인
          if (!visited[ny][nx]) {
            q.push([ny, nx, move + 1]);
            visited[ny][nx] = true;
          }
        }
      }
    }
  }

  return -1;
}
