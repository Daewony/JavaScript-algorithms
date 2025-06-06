function solution(n, computers) {
  let answer = 0;

  const visited = new Array(n).fill(false);

  // 반복문을 n만큼 돌린다
  // 방문한 곳인가? -> pass
  // 방문 안한 곳 -> answer +=1, 방문 처리 & 연결되어있는 컴퓨터도 방문 처리

  function dfs(current) {
    // 이미 방문 하였는가?
    if (visited[current]) return;
    // 방문안할시 처리
    visited[current] = true;

    for (let nx = 0; nx < n; nx++) {
      if (computers[current][nx] === 1 && !visited[nx]) {
        dfs(nx);
      }
    }
  }

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      answer += 1;
      dfs(i);
    }
  }

  return answer;
}
