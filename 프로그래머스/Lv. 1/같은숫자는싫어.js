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
// filter함수는 배열을 한번 스캔해서 다음에 나오는 것을 알기때문에 비교가능
function solution(arr) {
  return arr.filter((val, index) => {
    console.log(`val: ${val}, index: ${index}`);
    return val != arr[index + 1];
  });
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

// 커서 없이 배열의 길이를 활용하여 비교하기
function solution(arr) {
  var answer = [arr[0]];

  for (let i = 1; i < arr.length; i++) {
    console.log(
      `answer: ${answer} arr[i]: ${arr[i]} ${answer[answer.length - 1]}`
    );
    if (answer[answer.length - 1] !== arr[i]) {
      answer.push(arr[i]);
    }
  }

  return answer;
}