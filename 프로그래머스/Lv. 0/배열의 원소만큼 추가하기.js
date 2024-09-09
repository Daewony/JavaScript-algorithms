function solution(arr) {
  let ar = [];
  for (let i of arr) {
    for (let j = 1; j <= i; j++) ar.push(i);
  }
  return ar;
}

function solution(arr) {
  return arr.reduce((acc, cur) => acc.concat(Array(cur).fill(cur)), []);
}
