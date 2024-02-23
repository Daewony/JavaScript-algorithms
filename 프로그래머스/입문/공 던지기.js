// 2 * k - 전체 길이 - 2 의 index를 반환하면 답이 나옴 -> 의도와 안맞아

function solution(numbers, k) {
  var answer = 0;
  let idx = 0;
  while (true) {
    if (k === 1) return numbers[idx];
    idx += 2;
    if (idx > numbers.length - 1) idx -= numbers.length;
    k--;
    console.log(numbers[idx]);
  }

  return numbers[idx];
}
