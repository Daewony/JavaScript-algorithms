// 반복문을 이용해서 연속이면 담지 않도록 하자

function solution(arr) {
  let answer = [];

  for (let i = 0; i < arr.length; i++) {
    if (answer.length === 0) {
      answer.push(arr[i]);
      continue;
    }
    if (answer[answer.length - 1] !== arr[i]) {
      answer.push(arr[i]);
    }
  }

  return answer;
}
