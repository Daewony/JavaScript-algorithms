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

function solution(answers) {
  var answer = [];
  const s1 = [1, 2, 3, 4, 5];
  const s2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const s3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  let sum1 = 0;
  let sum2 = 0;
  let sum3 = 0;

  for (let i = 0; i < answers.length; i++) {
    if (s1[i % s1.length] === answers[i]) sum1 += 1;
    if (s2[i % s2.length] === answers[i]) sum2 += 1;
    if (s3[i % s3.length] === answers[i]) sum3 += 1;
  }

  console.log(sum1, sum2, sum3);

  // 걸러내기, 큰값을 찾고 큰값과 같은 것은 answer에 담기
  if (sum1 > sum2 && sum1 > sum3) return [1];

  return answer;
}
