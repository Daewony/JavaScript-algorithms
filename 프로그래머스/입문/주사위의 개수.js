// box의 각 길이에 n 만큼 나눈 몫을 곱한 만큼 주사위를 넣을 수 있음
// 아래 코드의 단점: 의미 파악하는데 어려움

function solution(box, n) {
  let answer = 1;
  for (let i = 0; i < box.length; i++) {
    answer *= Math.floor(box[i] / n);
  }
  return answer;
}