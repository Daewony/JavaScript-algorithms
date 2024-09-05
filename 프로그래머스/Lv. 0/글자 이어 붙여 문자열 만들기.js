function solution(my_string, index_list) {
  var answer = "";
  for (let i of index_list) {
    answer += my_string[i];
  }
  return answer;
}

function solution(my_string, index_list) {
  return index_list.reduce((acc, cur) => acc + my_string[cur], "");
}
