function solution(strArr) {
  let arr = Array(30).fill(0);
  for (const s of strArr) {
    let len = s.length;
    arr[len] = (arr[len] || 0) + 1; // 길이 len의 항목 개수 카운트
  }

  arr = arr.map((v) => (v === undefined ? 0 : v));

  return Math.max(...arr);
}

// 다른 사람의 풀이
function solution(strArr) {
  let arr = Array(30).fill(0); // 길이 30까지의 배열을 0으로 채우기

  // 문자열 길이에 따라 카운트
  for (const s of strArr) {
    arr[s.length]++; // 문자열 길이(len)의 인덱스를 증가
  }

  // 배열에서 가장 큰 값을 반환 (가장 많은 그룹의 크기)
  return Math.max(...arr);
}

function solution(strArr) {
  const counter = new Map();
  for (const str of strArr) {
    counter.set(str.length, (counter.get(str.length) || 0) + 1);
  }
  return Math.max(...counter.values());
}
