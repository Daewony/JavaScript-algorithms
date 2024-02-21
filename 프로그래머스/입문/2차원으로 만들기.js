// 반복문을 통해서 나누면 됨
// slice로 할 수 있지 않을까?

function solution(num_list, n) {
  // var answer = [[]];
  var answer = [];

  let row = Math.round(num_list.length / n);
  let col = n;
  let index = 0;

  for (let i = 0; i < row; i++) {
    answer.push([]);
    for (let j = 0; j < col; j++) {
      answer[i].push(num_list[index]);
      index += 1;
    }
  }

  return answer;
}
