function solution(n) {
  let i = n % 2 === 0 ? 2 : 1;
  let sum = 0;

  for (i; i <= n; i += 2) {
    if (n % 2 === 0) {
      sum += i * i;
    } else {
      sum += i;
    }
  }
  return sum;
}

// 다른 사람의 풀이
function solution(n) {
  let sum = 0;

  if (n % 2 === 0) {
    // 짝수일 때
    for (let i = 2; i <= n; i += 2) {
      sum += i * i;
    }
  } else {
    // 홀수일 때
    for (let i = 1; i <= n; i += 2) {
      sum += i;
    }
  }

  return sum;
}

function solution(n) {
  if (n % 2 === 1) return ((n + 1) / 2) * ((n + 1) / 2);
  else return (n * (n + 1) * (n + 2)) / 6;
}
