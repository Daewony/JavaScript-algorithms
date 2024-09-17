function solution(a, d, included) {
  let sum = 0;

  included.forEach((b, i) => {
    if (b) sum += add(a, d, i);
  });

  return sum;
}

function add(a, d, i) {
  return a + d * i;
}

// 다른 사람 풀이
function solution(a, d, included) {
  return included.reduce(
    (sum, include, i) => sum + (include ? a + d * i : 0),
    0
  );
}
