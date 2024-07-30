// 가장 많은 문제를 맞힌 사람이 누구인지 배열에 담기
// 가장 높은 점수를 받은 사람이 여럿일 경우, return하는 값을 오름차순 정렬

function solution(answers) {
  var answer = [];
  // 삼인방에 대한 맞힌 문제의 수를 저장 및 찍는 방식 저장
  let one = [
    [1, 0],
    [1, 2, 3, 4, 5],
  ];
  let two = [
    [2, 0],
    [2, 1, 2, 3, 2, 4, 2, 5],
  ];
  let thr = [
    [3, 0],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];

  // 찍는 방식 이해하기 0 1 2 3 4 0 1 2 3 4
  //                 1 2 3 4 5 1

  for (let i = 0; i < answers.length; i++) {
    if (answers[i] == one[1][i % one[1].length]) {
      one[0][1]++;
    }
    if (answers[i] == two[1][i % two[1].length]) {
      two[0][1]++;
    }
    if (answers[i] == thr[1][i % thr[1].length]) {
      thr[0][1]++;
    }
  }

  // 가장 많은 문제 맞춘사람 배열에 넣기
  let max = Math.max(one[0][1], two[0][1], thr[0][1]);
  if (max === one[0][1]) answer.push(one[0][0]);
  if (max === two[0][1]) answer.push(two[0][0]);
  if (max === thr[0][1]) answer.push(thr[0][0]);

  return answer;
}

function solution(answers) {
  // 수포자들의 패턴
  const patterns = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];

  //수포자들의 점수를 저장할 배열
  const scores = [0, 0, 0];

  // 각 수호자의 패턴과 정답이 얼마나 일치하는지 확인
  for (const [i, answer] of answers.entries()) {
    for (const [j, pattern] of patterns.entries()) {
      console.log(i, answer, j, pattern);
      if (answer === pattern[i % pattern.length]) {
        scores[j] += 1;
      }
    }
  }

  // 가장 높은 점수 저장
  const maxScore = Math.max(...scores);

  // 가장 높은 점수를 받은 수포자들의 번호를 찾아서 배열에 담음
  const highestScores = [];
  for (let i = 0; i < scores.length; i++) {
    if (scores[i] === maxScore) {
      highestScores.push(i + 1);
    }
  }

  return highestScores;
}

solution([1, 2, 3, 4, 5]);
