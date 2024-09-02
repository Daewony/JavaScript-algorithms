// 나의 풀이

function solution(num_list) {
  return num_list.length >= 11
    ? num_list.reduce((a, b) => a + b)
    : num_list.reduce((a, b) => a * b);
}

// 다른 사람의 풀이

function solution(num_list) {
  const mult = (acc, v) => acc * v;
  const add = (acc, v) => acc + v;

  return num_list.length >= 11
    ? num_list.reduce(add, 0)
    : num_list.reduce(mult, 1);
}
