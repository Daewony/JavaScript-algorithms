// 음수에서 가장 큰 수 2개 vs 양수에서 가장 큰 수 2개

function solution(numbers) {
  var answer = 0;
  numbers.sort((a, b) => a - b);
  // 양수에서 가장 큰 수 2개
  let [p1, p2] = [numbers[numbers.length - 1], numbers[numbers.length - 2]];
  if (numbers[0] < 0 && numbers[1] < 0) {
    let [n1, n2] = [numbers[0], numbers[1]];
    answer = p1 * p2 > n1 * n2 ? p1 * p2 : n1 * n2;
  } else {
    answer = p1 * p2;
  }
  return answer;
}
