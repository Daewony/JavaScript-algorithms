function solution(my_string, k) {
  let str = my_string;
  for (let i = 2; i <= k; i++) {
    my_string += str;
  }
  return my_string;
}

// 다른 사람의 풀이
function solution(my_string, k) {
  return my_string.repeat(k);
}
