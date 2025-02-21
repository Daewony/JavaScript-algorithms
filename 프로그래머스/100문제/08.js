// console.log(solution("(())()")); // 반환값 : true
// console.log(solution("((())()")); // 반환값 : false

// stack에 쌓여있으면 false, 없으면 true로 처리하면 됨
// push 기준: (
// pop 기준: )

function solution(str) {
  const stack = [];
  for (const char of str) {
    if (char === "(") stack.push(char);
    if (char === ")") stack.pop();
  }
  return stack.length === 0;
}

console.log(solution("(())()"));
console.log(solution("((())()"));
