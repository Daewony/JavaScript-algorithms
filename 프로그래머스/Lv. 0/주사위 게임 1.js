function solution(a, b) {
  return (a * b) % 2 === 1
    ? a * a + b * b
    : (a + b) % 2 === 1
    ? 2 * (a + b)
    : Math.abs(a - b);
}
