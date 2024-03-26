// 문제 정의
// 각 요소를 배열로 분해하여 수식을 계산하기
// 문제 분석
// 연산자 처리를 어떻게 할 것인가?
// 3,+,5 -> +이면 sum함수를 -이면 subtract

// "1 + 2 - 3" 이럴때 어떻게 처리할 것인가?
// 스택으로 처리하면 되지 않나?
// 특정 조건 +,-일때 발생

function solution(my_string) {
  var answer = 0;
  let arr = [];
  my_string = my_string.split(" ");
  my_string.forEach((str) => {
    if (!isNaN(Number(str))) arr.push(parseInt(str));
    else {
      arr.push(str);
    }
    console.log(arr);
    if (arr.length === 3) {
      let sum = 0;
      if (arr[1] === "+") {
        sum = arr[0] + arr[2];
        arr = [sum];
      }
      if (arr[1] === "-") {
        sum = arr[0] - arr[2];
        arr = [sum];
      }
      console.log(arr);
    }
  });

  return arr[0];
}

function solution(my_string) {
  let arr = my_string
    .split(" ")
    .map((str) => (isNaN(Number(str)) ? str : Number(str)));
  let stack = [];

  arr.forEach((element) => {
    if (!isNaN(element)) {
      stack.push(element);
    } else {
      const a = stack.pop();
      const b = stack.pop();
      switch (element) {
        case "+":
          stack.push(b + a);
          break;
        case "-":
          stack.push(b - a);
          break;
      }
    }
  });

  return stack.pop();
}
