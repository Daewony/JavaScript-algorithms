// 새로운 배열을 만든다 -> map 함수 활용?
// filter랑 무슨 차이지?

function solution(n, numlist) {
  var answer = [];
  answer = numlist.filter((e) => e % n === 0);
  return answer;
}
