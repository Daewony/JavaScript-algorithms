// 두 변에서 큰값-작은값+1 ~ 큰값까지
// 큰값+1 ~ 두변의 합 -1 까지

function solution(sides) {
  var answer = 0;
  let min = Math.min(...sides);
  let max = Math.max(...sides);
  for (let i = max - min + 1; i <= max; i++) {
    answer += 1;
  }
  for (let i = max + 1; i <= max + min - 1; i++) {
    answer += 1;
  }

  return answer;
}
