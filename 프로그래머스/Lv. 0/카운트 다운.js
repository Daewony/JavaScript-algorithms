function solution(start_num, end_num) {
  var answer = [];
  for (let i = start_num; i >= end_num; i--) {
    answer.push(i);
  }
  return answer;
}

// 다른 사람의 풀이
function solution(start_num, end_num) {
  return Array.from(
    { length: start_num - end_num + 1 },
    (_, i) => start_num - i
  );
}
