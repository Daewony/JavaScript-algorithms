function solution(todo_list, finished) {
  var answer = [];
  return todo_list
    .map((s, i) => {
      if (!finished[i]) return s;
      else return "";
    })
    .filter((v) => v !== "");
}

// 조건 문제라고 map 메서드로만 사용하지말고 filter도 생각하기

// 다른 사람의 풀이
function solution(todo_list, finished) {
  return todo_list.filter((_, i) => !finished[i]);
}
