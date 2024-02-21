// 함수로 만들어서 조건문으로 해결하면 되겠다
// 문제의 의도는 무엇이지?
//

const dotPostion = (x, y) => {
  if (x > 0 && y > 0) return 1;
  if (x < 0 && y > 0) return 2;
  if (x < 0 && y < 0) return 3;
  if (x > 0 && y < 0) return 4;
};

function solution(dot) {
  var answer = dotPostion(dot[0], dot[1]);
  return answer;
}
