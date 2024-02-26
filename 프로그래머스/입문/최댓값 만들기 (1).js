// 정렬해서 큰값 2개를 곱하기

function solution(numbers) {
  numbers.sort((a, b) => b - a);
  return numbers[0] * numbers[1];
}
