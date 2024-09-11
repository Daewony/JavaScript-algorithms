function solution(my_string) {
  return my_string.split(" ").filter((s) => s !== "");
}

// 다른 사람 풀이
function solution(my_string) {
  return my_string.trim().split(/\s+/);
}
