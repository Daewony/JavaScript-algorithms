// 이중 for문으로 현재 가격과 그 후의 가격이 자신보다 작은게 있는지 갯수를 세면됨

function solution(prices) {
  const answer = [];

  for (let i = 0; i < prices.length; i++) {
    let sum = 0;

    for (let j = i + 1; j < prices.length; j++) {
      if (prices[i] > prices[j]) break;
      else sum++;
    }
    answer.push(sum);
  }
  return answer;
}

// 이중 for문으로 현재 가격과 그 후의 가격이 자신보다 작은게 있는지 갯수를 세면됨
// 어떤 것을 놓친거지?

function solution(prices) {
  const answer = [];

  for (let i = 0; i < prices.length; i++) {
    let sum = 0;

    for (let j = i + 1; j < prices.length; j++) {
      if (prices[i] > prices[j]) {
        sum++; // 가격이 떨어지면 1초만에 떨어진 것이므로 처리해야함
        break;
      } else sum++;
    }
    // if(sum===0 && i!==prices.length-1) sum++; 이 조건은 맞지 않음

    answer.push(sum);
  }
  return answer;
}
