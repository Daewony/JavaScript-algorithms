// 나의 풀이
function solution(numbers, n) {
  let sum = 0;
  for (const number of numbers) {
    sum += number;
    if (sum > n) {
      return sum;
    }
  }
  return sum;
}
