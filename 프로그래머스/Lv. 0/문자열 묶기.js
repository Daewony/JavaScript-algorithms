function solution(strArr) {
  var answer = 0;
  let arr = Array(30).fill(0);
  for (const s of strArr) {
    let len = s.length;
    arr[len] = (arr[len] || 0) + 1; // 길이 len의 항목 개수 카운트
  }

  arr = arr.map((v) => (v === undefined ? 0 : v));

  return Math.max(...arr);
}
