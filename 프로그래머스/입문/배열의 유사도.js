// 이중 for 문을 통해 각각을 비교해서 값을 반환
//

function solution(s1, s2) {
  var answer = 0;
  s1.forEach((s1, i) => {
    s2.forEach((s2, j) => {
      if (s1 === s2) {
        answer += 1;
      }
    });
  });

  return answer;
}

function solution(s1, s2) {
  return s1.filter((v) => s2.includes(v)).length;
}
