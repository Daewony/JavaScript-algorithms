function solution(arr, idx) {
  let res = -1;
  for (let i = idx; i < arr.length; i++) {
    if (arr[i] === 1) {
      res = i;
      break;
    }
  }

  return res;
}

// 다른 사람의 풀이

const solution = (a, i) => a.indexOf(1, i);
