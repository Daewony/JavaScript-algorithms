// 회전 시키기(반복문, s의 길이까지)
// stack을 생각함, 괄호에 맞게 pop을 하기
// 꼭 스택을 써야할까?
// [0,0,0] -> 이런식으로도 풀 수 있지 않나? 0보다 더 내려갈 순 없게하기
// 기호도 3가지만 있잖아? 그걸 매칭시켜서 풀면되지
// 회전은 어떻게 시킬꺼야? slice를 사용해서 앞부분을 자르고 뒤에 붙이면 될듯

const sign = {
  "(": "0",
  ")": "0",
  "[": "1",
  "]": "1",
  "{": "2",
  "}": "2",
};

function solution2(s) {
  let answer = 0;
  const arr = [0, 0, 0];

  //
  for (let i = 0; i < s.length; i++) {
    const si = s[i];
    if (si === "(") arr[sign[si]]++;
    if (si === ")") {
      if (arr[sign[si]] > 0) arr[sign[si]]--;
    }
  }

  return answer;
}

// x칸 만큼 회원 0~s 길이만큼
// 조건식으로 pop하기

function rotate(arr) {
  const f = arr.shift();
  return arr.push(f);
}

function solution(s) {
  let answer = 0;
  // 해당 문자열 -> 배열 변환
  let arr = s.split("");
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      let now = arr[j];
      console.log(stack);
      if (now === "(" || now === "{" || now === "[") {
        stack.push(now);
        continue;
      }

      if (stack.length > 0) {
        let pre = stack[stack.length - 1];

        if (pre === "[" && now === "]") stack.pop();
        else if (pre === "(" && now === ")") stack.pop();
        else if (pre === "{" && now === "}") stack.pop();
      }
    }
    if (stack.length === 0) {
      console.log(i);
      answer++;
    }
    rotate(arr);
  }

  return answer;
}
