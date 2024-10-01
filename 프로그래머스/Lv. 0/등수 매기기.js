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
