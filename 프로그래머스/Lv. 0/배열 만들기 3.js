function solution(arr, intervals) {
  let answer = [];
  for (let [s, e] of intervals) {
    answer = [...answer, ...arr.slice(s, e + 1)];
  }

  return answer;
}

// 다른 사람의 풀이
function solution(arr, intervals) {
  // 구간 1과 구간 2를 추출
  const [a1, b1] = intervals[0];
  const [a2, b2] = intervals[1];

  // 각 구간에 해당하는 배열을 추출
  const firstPart = arr.slice(a1, b1 + 1);
  const secondPart = arr.slice(a2, b2 + 1);

  // 두 배열을 결합하여 결과 반환
  return firstPart.concat(secondPart);
}

function solution(arr, intervals) {
  const [[a, b], [c, d]] = intervals;

  return [...arr.slice(a, b + 1), ...arr.slice(c, d + 1)];
}
