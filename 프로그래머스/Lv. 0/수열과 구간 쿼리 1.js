function solution(arr, queries) {
  let i = 0;
  for (const [s, e] of queries) {
    for (let i = s; i <= e; i++) {
      arr[i] += 1;
    }
  }
  return arr;
}

// 다른 사람 풀이

function solution(arr, queries) {
  queries.forEach(([s, e]) => {
    while (s <= e) arr[s++]++;
  });
  return arr;
}
