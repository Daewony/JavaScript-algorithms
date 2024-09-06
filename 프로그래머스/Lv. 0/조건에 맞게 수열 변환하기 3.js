function solution(arr, k) {
  return arr.map((a) => (k % 2 === 0 ? a + k : a * k));
}
