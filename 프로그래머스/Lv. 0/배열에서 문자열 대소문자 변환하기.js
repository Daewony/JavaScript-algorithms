function solution(strArr) {
  return strArr.map((c, i) =>
    i % 2 === 0 ? c.toLowerCase() : c.toUpperCase()
  );
}
