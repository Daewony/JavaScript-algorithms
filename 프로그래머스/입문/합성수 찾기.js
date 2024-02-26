// 다른 사람들의 풀이가 잘 이해안감

function solution(n) {
  var answer = 0;

  for (let i = 1; i <= n; i++) {
    let over = 0;
    for (let j = 1; j <= i; j++) {
      if (i % j === 0) over++;
    }
    if (over >= 3) {
      answer++;
      console.log(i);
    }
  }
  return answer;
}
