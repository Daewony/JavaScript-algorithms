// 3가지 규칙적인 방식으로 찍음 -> 찍는 것을 배열로 반복해서 하기
// 각자 점수표 필요함
// answers 길이만큼 반복문 돌림
// 각자 길이 % answers로 처리하기
// 점수는 객체로 만들고 싶네
//

const students = {
  1: 0,
  2: 0,
  3: 0,
};

for (const key in students) {
  console.log(key, students[key]);
}

function solution(answers) {
  var answer = [];
  const s1 = [1, 2, 3, 4, 5];
  const s2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const s3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  //   패턴은 한꺼번에 묶자
  let sum1 = 0;
  let sum2 = 0;
  let sum3 = 0;
  // 점수도 묶자

  // 비슷한 것이니
  for (let i = 0; i < answers.length; i++) {
    if (s1[i % s1.length] === answers[i]) sum1 += 1;
    if (s2[i % s2.length] === answers[i]) sum2 += 1;
    if (s3[i % s3.length] === answers[i]) sum3 += 1;
  }

  // 걸러내기, 큰값을 찾고 큰값과 같은 것은 answer에 담기
  const max = Math.max(sum1, sum2, sum3);
  if (max === sum1) answer.push(1);
  if (max === sum2) answer.push(2);
  if (max === sum3) answer.push(3);

  return answer;
}

// 정답

function solution(answers) {
  // 수포자들의 패턴
  const patterns = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];

  // 수포자들의 점수 초기화
  const scores = [0, 0, 0];

  // 정답을 맞춘 수포자들의 점수 계산
  answers.forEach((answer, i) => {
    patterns.forEach((pattern, j) => {
      if (answer === pattern[i % pattern.length]) {
        scores[j]++;
      }
    });
  });
  // for(const[i,answer] of answers.entries()) {
  //     for(const[j,pattern] of patterns.entries()) {
  //         if(answer === pattern [ i % pattern.length]){
  //             scores[j]++;
  //         }
  //     }
  // })

  // 가장 많은 문제를 맞힌 수포자들
  const maxScore = Math.max(...scores);

  // 가장 높은 점수를 받은 수포자들
  const highestScorers = [];
  scores.forEach((score, i) => {
    if (score === maxScore) {
      highestScorers.push(i + 1);
    }
  });

  return highestScorers;
}
