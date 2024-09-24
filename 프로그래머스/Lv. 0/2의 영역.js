function solution(arr) {
  let s = arr.indexOf(2);
  let e = arr.lastIndexOf(2);
  let res = arr.slice(s, e + 1);
  if (res.length === 0) return [-1];
  return res;
}

// 다른 사람의 풀이
function solution(arr) {
  let s = arr.indexOf(2);
  let e = arr.lastIndexOf(2);

  // 2가 배열에 없을 경우
  if (s === -1) return [-1];

  // 2가 존재하는 경우, 해당 부분 배열 반환
  return arr.slice(s, e + 1);
}

function solution(arr) {
  if (!arr.includes(2)) return [-1];

  let left = 0,
    right = arr.length - 1;
  while (arr[left] !== 2) left++;
  while (arr[right] !== 2) right--;

  return arr.slice(left, right + 1);
}
