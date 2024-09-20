function solution(arr, queries) {
  for (const [i, j] of queries) {
    let tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
  }
  return arr;
}

// 다른 사람의 풀이

function solution(arr, queries) {
  for (const [i, j] of queries) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
