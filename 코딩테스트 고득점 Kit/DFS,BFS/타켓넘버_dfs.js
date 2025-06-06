// 핵심 키워드: 적절히 더하거나 뺀다 -> 2개의 선택지를 제공함, 여러 방법 -> 그래프
// 알고리즘: dfs, bfs 둘다 가능
// 자료구조: dfs -> 스택, bfs -> 큐, 방문여부 -> 배열
// 시간복잡도: 최대 20^2 같음 -> +,- 가능하니
// 목표: 타켓 넘버를 만드는 방법의 수
// 타켓넘버인 것을 어떻게 알지?
// - 조건:
// 1. 주어진 수를 다 사용했는가? index값 = 깊이 값 필요
// 2. 주어진 수를 다 씀 + 합계가 타켓 넘버인가? -> 합계를 구하거나 넘겨서 합계를 알려줘야함

function solution(numbers, target) {
  let answer = 0;
  // DFS

  function dfs(depth, total) {
    // 목표 조건
    if (depth === numbers.length) {
      if (total === target) {
        answer += 1;
      }
      return;
    }
    dfs(depth + 1, total + numbers[depth]);
    dfs(depth + 1, total - numbers[depth]);
  }

  dfs(0, 0);

  return answer;
}

function solution2(numbers, target) {
  let answer = 0;
  // DFS

  function dfs(depth, total) {
    // 목표 조건
    if (depth === numbers.length) {
      return total === target ? 1 : 0;
    }
    return dfs(
      depth + 1,
      total + numbers[depth] + dfs(depth + 1, total - numbers[depth])
    );
  }

  return dfs(0, 0);
}
