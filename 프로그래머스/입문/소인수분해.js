// 중복된 수를 없애기

function solution(n) {
  var answer = [];
  let i = 2;
  while (true) {
    if (n % i === 0) {
      answer.push(i);
      n = Math.floor(n / i);
      i = 2;
      continue;
    }
    if (n === 1) break;

    i++;
  }
  return [...new Set(answer)];
}
