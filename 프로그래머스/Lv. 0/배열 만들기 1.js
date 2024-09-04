function solution(n, k) {
  var answer = [];
  for (let i = k; i <= n; i += k) {
    answer.push(i);
  }
  return answer;
}

// chatGPT 풀이
function solution(n, k) {
  return Array.from({ length: Math.floor(n / k) }, (_, i) => (i + 1) * k);
}
