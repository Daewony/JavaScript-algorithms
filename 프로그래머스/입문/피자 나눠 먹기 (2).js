// n과 6의 최소 공배수를 찾아라 문제네
// 최소 공배수를 찾기 -> 6으로 나눈 값을 return 해준다
// 10 6
// 2 | 5 3

function solution(n) {
  let p = 6;
  let s = 2;
  let e = n >= p ? n : p;

  let sum = 1;

  while (s <= e) {
    if (n % s === 0 && p % s === 0) {
      n /= s;
      p /= s;
      sum *= s;
    } else {
      s++;
    }
  }
  sum = sum * n * p;
  return sum / 6;
}
