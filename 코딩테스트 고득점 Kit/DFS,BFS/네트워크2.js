// 핵심 키워드:
// 알고리즘:
// 자료구조: 이미 연결되어있는 네트워크라는 방문 여부 배열,
// 시간복잡도:

// 목표: 네트워크의 개수
// 조건: 직접연결 or 간접 연결되어있어야 하나의 네트워크로 봄
// 어떤 컴퓨터와 연결되어있는지를 알아야함
// 하나의 네트워크 -> 하나의 dfs로

// 방문 여부를 어떻게 표시하지?

function solution(n, computers) {
  let answer = 0;

  const visited = new Array(n).fill(false);

  // 반복문을 n만큼 돌린다
  // 방문한 곳인가? -> pass
  // 방문 안한 곳 -> answer +=1, 방문 처리 & 연결되어있는 컴퓨터도 방문 처리
  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      answer += 1;
      for (let j = 0; j < n; j++) {
        // computer[i][i]는 항상 1
        if (i === j) continue;

        // computers[i][j]를 1로 표현
        if (computers[i][j] === 1) visited[j] = true;
      }
    }
  }

  return answer;
}
