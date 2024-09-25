function solution(order) {
  var answer = 0;
  for (const o of order) {
    if (o.includes('americano') || o.includes('anything')) answer += 4500;
    else answer += 5000;
  }
  return answer;
}

// 다른 사람의 풀이

const solution = (order) =>
  order.reduce((acc, cur) => acc + (cur.includes('latte') ? 5000 : 4500), 0);
