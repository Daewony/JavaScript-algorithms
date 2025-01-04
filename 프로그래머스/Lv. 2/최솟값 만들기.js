// 누적  값을 최소로 만든다 -> 정렬 최소 * 최대 => 누적 최소

function solution(A, B) {
  const sa = A.sort((a, b) => a - b);
  const sb = B.sort((a, b) => b - a);

  let answer = 0;
  for (let i = 0; i < A.length; i++) {
    answer += sa[i] * sb[i];
  }

  return answer;
}

function solution2(A, B) {
  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);

  return A.reduce((acc, _, i) => acc + A[i] * B[i], 0);
}
