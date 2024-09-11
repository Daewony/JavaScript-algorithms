function solution(rny_string) {
  return rny_string.split("m").join("rn");
}

// 다른 사람 풀이
function solution(rny_string) {
  return rny_string.replaceAll("m", "rn");
}
