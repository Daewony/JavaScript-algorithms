function solution(a, b) {
  let num1 = +(String(a) + b);
  let num2 = +(String(b) + a);

  return num1 >= num2 ? num1 : num2;
}
