// 2번째 풀이(성공)

function solution(s) {
  let answer = 0;
  let arr = s.split("");
  console.log(arr, s.length);

  // 왼쪽으로 x (0 ≤ x < (s의 길이)) 칸만큼 회전
  for (let i = 0; i < s.length; i++) {
    // i === 0 이면 한칸씩 이동 안함
    if (i !== 0) {
      let tmp = arr.shift();
      arr.push(tmp);
    }
    // 올바른 괄호 문자열?
    let c = [];

    for (let a of arr) {
      if (a === ")") {
        if (c[c.length - 1] === "(") {
          c.pop();
        } else {
          c.push(a);
        }
      } else if (a === "]") {
        if (c[c.length - 1] === "[") {
          c.pop();
        } else {
          c.push(a);
        }
      } else if (a === "}") {
        if (c[c.length - 1] === "{") {
          c.pop();
        } else {
          c.push(a);
        }
      } else {
        c.push(a);
      }
    }
    if (c.length === 0) {
      answer++;
    }
  }

  return answer;
}

// 1번재 풀이(실패)

function solution(s) {
  var answer = 0;
  // [, (, { // 0일 때 빼는거 예외처리하기

  // 스택/큐
  // 올바른 괄호 문자열인가? 체크하는게 필요
  s = s.split("");

  for (let i = 0; i < s.length; i++) {
    let p = [0, 0, 0];
    for (let j of s) {
      if (j === "[") p[0]++;
      if (j === "]") {
        if (p[0] > 0) p[0]--;
      }
      if (j === "(") p[1]++;
      if (j === ")") {
        if (p[1] > 0) p[1]--;
      }
      if (j === "{") p[2]++;
      if (j === "}") {
        if (p[2] > 0) p[2]--;
      }
    }
    console.log(p);
    let sum = p.reduce((a, b) => a + b);
    if (sum === 0) answer++;
    // 왼쪽으로 s의 길이 만큼 반복해서 움직여서 체크해야함
    let tmp = s.shift();
    console.log(tmp);
    s.push(tmp);
    console.log(s);
    // console.log(s)
  }

  return answer;
}

// 3번째 풀이(chatGPT)

function isValidParentheses(s) {
  const stack = [];
  for (let char of s) {
    if (char === "(" || char === "[" || char === "{") {
      stack.push(char);
    } else {
      if (stack.length === 0) return false;
      const last = stack.pop();
      if (
        (char === ")" && last != "(") ||
        (char === "]" && last != "[") ||
        (char === "}" && last != "{")
      ) {
        return false;
      }
    }
  }
  return stack.length === 0;
}

function solution(s) {
  let count = 0;
  const len = s.length;

  for (let i = 0; i < len; i++) {
    // 큐 를 사용시 불필요한 배열 조작 필요
    // 따라서 slice 사용
    const rotated = s.slice(i) + s.slice(0, i);
    if (isValuidParentheses(rotated)) count++;
  }
  return count;
}
