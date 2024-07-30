function solution(num) {
  let res = "";
  while (num >= 1) {
    res = (num % 2) + res;
    num = Math.floor((num /= 2));
    console.log(num);
  }

  return res;
}
console.log(solution(10));

function solution(decimal) {
  const stack = [];

  while (decimal > 0) {
    const remainder = decimal % 2;
    stack.push(remainder);
    decimal = Math.floor(decimal / 2);
  }

  let binary = "";
  while (stack.length > 0) {
    binary += stack.pop();
  }

  return binary;
}
