function solution(arr, query) {
  query.forEach((q, i) => {
    if (i % 2 === 0) arr = arr.slice(0, q + 1);
    else arr = arr.slice(q, arr.length);
  });
  return arr;
}

// 다른 사람 풀이
function solution(arr, query) {
  let start = 0;
  let end = arr.length;

  query.forEach((q, i) => {
    if (i % 2 === 0) {
      end = q + 1; // 짝수 인덱스에서는 뒤쪽을 자름
    } else {
      start = q; // 홀수 인덱스에서는 앞쪽을 자름
    }
  });

  return arr.slice(start, end);
}

function solution(arr, query) {
  var answer = [];
  query.map((v, i) => (i % 2 ? arr.splice(0, v) : arr.splice(v + 1)));
  return arr;
}
