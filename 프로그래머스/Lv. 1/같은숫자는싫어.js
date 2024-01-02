function solution(arr) {
  let answer = [];
  let cursor = 0;
  answer.push(arr[0]);
  for (let i = 1; i < arr.length; i++) {
    if (answer[cursor] !== arr[i]) {
      answer.push(arr[i]);
      cursor++;
    }
  }

  return answer;
}

function solution(arr) {
  return arr.filter((val, index) => val != arr[index + 1]);
}

function solution(arr) {
  let answer = [];
  let cur1 = 1;
  let cur2 = 0;

  // 연속된 중복된 수를 체크하기
  answer.push(arr[0]);

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== answer[cur2]) {
      answer.push(arr[i]);
      cur2++;
    }
  }

  return answer;
}