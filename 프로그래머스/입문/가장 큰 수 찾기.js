// 가장 큰 수를 어떻게 찾을거야?
// 그것을 어떻게 저장할거야?

function solution(array) {
  var answer = [];
  array.forEach((num, index) => {
    if (answer.length === 0) {
      answer[0] = num;
      answer[1] = index;
    }
    if (answer[0] < num) {
      answer[0] = num;
      answer[1] = index;
    }
  });
  return answer;
}

function solution(array) {
  let max = Math.max(...array);
  return [max, array.indexOf(max)];
}
