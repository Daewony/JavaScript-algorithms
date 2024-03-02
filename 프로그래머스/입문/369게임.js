function solution(order) {
  // 숫자를 문자열로 변환하고, 각 문자가 '3', '6', '9' 중 하나인지 확인
  return order
    .toString()
    .split("")
    .filter((e) => ["3", "6", "9"].includes(e)).length;
}

function solution(order) {
  return String(order).split(/[369]/).length - 1;
}

function solution(order) {
  const mySet = new Set([3, 6, 9]);
  return String(order)
    .split("")
    .filter((num) => mySet.has(Number(num))).length;
}
