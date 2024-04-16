// 규칙이 불규칙이여서 공식이 아닌 조건에 맞게 반복문을 실행하자

function solution(n) {
  var answer = 0;
  for (let i = 1; i <= n; i++) {
    answer += 1;
    while (answer % 3 === 0 || String(answer).includes("3")) {
      answer += 1;
    }
  }
  return answer;
}
