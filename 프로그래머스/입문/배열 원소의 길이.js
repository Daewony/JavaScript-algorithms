function solution(strlist) {
  var answer = [];
  strlist.forEach((e) => {
    answer.push(e.length);
  });
  return answer;
}

function solution(strlist) {
  return strlist.map((e) => e.length);
}
