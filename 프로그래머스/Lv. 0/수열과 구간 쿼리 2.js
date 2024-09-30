function solution(arr, queries) {
  var answer = [];
  for (const [s, e, k] of queries) {
    // s~e 범위 자르기
    let a = arr.slice(s, e + 1);
    // k보다 큰값으로 필터를 해서 첫번째 요소를 반환
    let fi = a.sort((a, b) => a - b).filter((v) => v > k);

    if (fi.length === 0) answer.push(-1);
    else answer.push(fi[0]);
  }

  return answer;
}

// 다른 사람 풀이
function solution(arr, queries) {
  return queries.map(
    ([s, e, k]) =>
      arr
        .slice(s, e + 1)
        .filter((n) => n > k)
        .sort((a, b) => a - b)[0] || -1
  );
}

function solution(arr, queries) {
  const answer = [];

  for (const [s, e, k] of queries) {
    let minVal = Infinity;

    for (let i = s; i <= e; i++) {
      if (arr[i] > k && arr[i] < minVal) {
        minVal = arr[i];
      }
    }

    answer.push(minVal === Infinity ? -1 : minVal);
  }

  return answer;
}
