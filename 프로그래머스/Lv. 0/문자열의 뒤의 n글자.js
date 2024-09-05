function solution(my_string, n) {
  let len = my_string.length;
  return my_string.slice(len - n);
}

// slice는 음수를 인자로 받을 수 있음

function solution(my_string, n) {
  return my_string.slice(-n);
}
