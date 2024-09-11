function solution(n) {
  var answer = [];
  answer.push(n);
  while (true) {
    if (n === 1) break;

    if (n % 2 === 0) {
      n /= 2;
    } else {
      n = 3 * n + 1;
    }
    answer.push(n);
  }
  return answer;
}

// 다른 사람 풀이
function solution(n, sequence = [n]) {
  if (n === 1) return sequence;
  const next = n % 2 === 0 ? n / 2 : 3 * n + 1;
  return solution(next, [...sequence, next]);
}
