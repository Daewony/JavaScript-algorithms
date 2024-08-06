// 그나마 생각이 떠오르는 것은 트리 구조
// 절반

function solution(n, a, b) {
  var answer = 0;

  while (a !== b) {
    a = Math.floor((a + 1) / 2);
    b = Math.floor((b + 1) / 2);
    answer++;
  }

  return answer;
}
