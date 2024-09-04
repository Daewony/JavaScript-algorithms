function solution(my_string, is_prefix) {
  return my_string.split(is_prefix)[0] === "" ? 1 : 0;
}

// 다른 사람의 풀이

function solution(my_string, is_prefix) {
  return +my_string.startsWith(is_prefix);
}

function solution(my_string, is_prefix) {
  return my_string.startsWith(is_prefix) ? 1 : 0;
}
