// 길이 k 배열
// 서로 다른 수를 배열에 push하기
// 배열의 길이가 k일때까지 나머지 값을 -1 로 push하기

function solution(arr, k) {
  const answer = [];

  for (const a of arr) {
    if (!answer.includes(a) && answer.length < k) answer.push(a);
  }

  while (answer.length < k) {
    answer.push(-1);
  }

  return answer;
}

// 다른 사람 풀이
function solution(arr, k) {
  const answer = [];
  const seen = new Set();

  for (const a of arr) {
    if (!seen.has(a)) {
      seen.add(a);
      answer.push(a);
      if (answer.length === k) break;
    }
  }

  while (answer.length < k) {
    answer.push(-1);
  }

  return answer;
}

function solution(arr, k) {
  const set = new Set(arr);
  return set.size < k
    ? [...set, ...Array(k - set.size).fill(-1)]
    : [...set].slice(0, k);
}
