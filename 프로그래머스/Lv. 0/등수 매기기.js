// 등수를 매겨주는 함수 필요함
// 일단 평균점수를 담은 배열을 만들자

function solution(score) {
  var answer = [];

  const avg = [];
  for (const [m, e] of score) {
    avg.push((m + e) / 2);
  }
  let sortedAvg = [...avg].sort((a, b) => b - a);
  for (const i of avg) {
    answer.push(sortedAvg.indexOf(i) + 1);
  }

  return answer;
}

// 다른 사람 풀이
function solution(score) {
  // 각 학생의 평균 점수를 계산한 배열을 만듦
  const avg = score.map(([e, m]) => (e + m) / 2);

  // 평균 점수를 기준으로 내림차순 정렬한 배열을 만듦
  const sortedAvg = [...avg].sort((a, b) => b - a);

  // 정렬된 배열의 순위에 따라 등수를 부여
  return avg.map((v) => sortedAvg.indexOf(v) + 1);
}

function solution(score) {
  return score.map((el) => {
    return (
      score.filter((v) => (v[0] + v[1]) / 2 > (el[0] + el[1]) / 2).length + 1
    );
  });
}
