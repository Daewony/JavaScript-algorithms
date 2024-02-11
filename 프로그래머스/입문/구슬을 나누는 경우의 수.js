function solution(balls, share) {
  var answer = 0;

  const pac = (n) => {
    if (n === 0) return 1;
    let sum = 1;
    for (let i = n; i >= 1; i--) {
      sum *= i;
    }
    return sum;
  };

  answer = Math.round(pac(balls) / (pac(balls - share) * pac(share)));

  return answer;
}

// 어이없는 round 메서드 활용이네.. 0.300004 같은 수 때문에 사용함