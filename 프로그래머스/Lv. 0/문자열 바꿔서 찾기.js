function solution(myString, pat) {
  return [...myString]
    .map((c) => (c === "A" ? "B" : "A"))
    .join("")
    .includes(pat)
    ? 1
    : 0;
}

// 다른 사람의 풀이
function solution(str, pat) {
  pat = pat.replaceAll("A", "X").replaceAll("B", "A").replaceAll("X", "B");

  return str.indexOf(pat) === -1 ? 0 : 1;
}
