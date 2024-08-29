// 조건없이 sort()를 사용하면 문자열 기준으로 정렬해서 합치기

function solution(numbers) {
  var answer = "";
  numbers.sort();
  for (let i = numbers.length - 1; i >= 0; i--) {
    // 3 , 30하고 어떻게 구분하지?
    if (i === 0) {
      console.log(numbers[i]);
      console.log(numbers[i - 1] % numbers[i]);
      if (numbers[i - 1] % numbers[i] === 0) {
        console.log(numbers[i]);
        numbers[i], (numbers[i - 1] = numbers[i - 1]), numbers[i];
        console.log(numbers[i]);
      }
    } else {
      answer += numbers[i];
    }
  }
  return answer;
}
