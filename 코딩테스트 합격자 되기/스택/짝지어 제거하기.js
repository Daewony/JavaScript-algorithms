// 3. 풀이(성공)
function solution(s) {
  let stack = [];

  for (let char of s) {
    if (stack.length > 0 && stack[stack.length - 1] === char) {
      stack.pop();
    } else {
      stack.push(char);
    }
  }

  return stack.length === 0 ? 1 : 0;
}

// 2. 풀이(실패) -> 마지막에 굳이 푸시할 필요없는데 푸시함
function solution(s) {
  let answer = 0;
  let arr = [];

  for (let char of s) {
    if (arr.length === 0) {
      arr.push(char);
      continue;
    }
    if (arr[arr.length - 1] === char) {
      arr.pop();
    }
  }

  if (arr.length === 0) {
    answer = 1;
  }

  return answer;
}

// 1. 풀이(문제 풀이는 성공 but 효율성 테스트 실패)
function solution(s) {
  let answer = 1;

  s = s.split("");

  while (s.length !== 0) {
    let flag = false;
    for (let i = 0; i < s.length - 1; i++) {
      if (s[i] === s[i + 1]) {
        s.splice(i, 2);
        flag = true;
        break;
      }
    }
    if (!flag) {
      answer = 0;
      break;
    }
  }

  return answer;
}
