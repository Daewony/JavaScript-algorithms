function solution(n) {
  let answer = [];
  for (let i = 0; i < n; i++) {
    answer[i] = [];
    for (let j = 0; j < n; j++) {
      if (i === j) answer[i].push(1);
      else answer[i].push(0);
    }
  }
  return answer;
}

// 다른 사람의 풀이
function solution(n) {
  return Array.from(
    { length: n },
    (_, (i_) => Array.from({ length: n }, (_, j) => (i === j ? 1 : 0)))
  );
}
