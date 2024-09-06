function solution(num_list) {
  const a = num_list
    .filter((n, i) => (i + 1) % 2 !== 0)
    .reduce((acc, cur) => acc + cur, 0);
  const b = num_list
    .filter((n, i) => (i + 1) % 2 === 0)
    .reduce((acc, cur) => acc + cur, 0);
  return a >= b ? a : b;
}
