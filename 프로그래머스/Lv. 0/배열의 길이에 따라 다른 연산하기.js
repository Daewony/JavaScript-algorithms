function solution(arr, n) {
  return arr.length % 2 === 0
    ? arr.map((a, i) => (i % 2 === 1 ? a + n : a))
    : arr.map((a, i) => (i % 2 === 0 ? a + n : a));
}

// filter는 조건에 맞는 요소만 추출해서 배열을 줄여주고, map은 조건에 맞는 요소만 변경해서 배열을 반환함

function solution(arr, n) {
  const isEvenLength = arr.length % 2 === 0;
  return arr.map((a, i) =>
    isEvenLength ? (i % 2 === 1 ? a + n : a) : i % 2 === 0 ? a + n : a
  );
}
