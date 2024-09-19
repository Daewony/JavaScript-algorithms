function solution(arr, flag) {
  var answer = [];
  flag.forEach((b, i) => {
    if (b) {
      for (let j = 1; j <= arr[i] * 2; j++) {
        answer.push(arr[i]);
      }
    } else {
      for (let j = 1; j <= arr[i]; j++) {
        answer.pop();
      }
    }
  });
  return answer;
}
