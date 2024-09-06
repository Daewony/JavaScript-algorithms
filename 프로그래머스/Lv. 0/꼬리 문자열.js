function solution(str_list, ex) {
  return str_list
    .filter((word) => !word.includes(ex))
    .reduce((acc, cur) => acc + cur, "");
}

// 간단한 문자열 연결에는 join이 적합함
function solution(str_list, ex) {
  return str_list.filter((word) => !word.includes(ex)).join("");
}
