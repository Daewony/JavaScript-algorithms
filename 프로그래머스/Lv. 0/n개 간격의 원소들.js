// 나의 풀이 (for문, forEach)
function solution(num_list, n) {
  var answer = [];
  for (let i = 0; i < num_list.length; i++) {
    if (i % n === 0) answer.push(num_list[i]);
  }
  return answer;
}

function solution(num_list, n) {
  var answer = [];
  num_list.forEach((num, i) => {
    if (i % n === 0) answer.push(num);
  });
  return answer;
}

// filter & map 조합 풀이

function solution(num_list, n) {
  return num_list
    .map((num, i) => (i % n === 0 ? num : null))
    .filter((num) => num !== null);
}
