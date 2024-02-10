function solution(emergency) {
  var answer = Array(emergency.length).fill(1);
  for (let i = 0; i < emergency.length; i++) {
    for (let j = 0; j < emergency.length; j++) {
      if (emergency[i] < emergency[j]) answer[i] += 1;
    }
  }
  return answer;
}
// 풀었는데 다른 좋은 방법은 없을까 고민이됨 -> 이중 for문 말고 다른 방법은 없을까?