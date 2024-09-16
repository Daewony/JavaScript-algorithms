function solution(number) {
  // let a = number.split('').map((v)=>+v).reduce((acc,cur)=>acc+cur,0);
  let a = number.split('').reduce((acc, cur) => acc + +cur, 0);
  return a % 9;
}

// 다른 사람 풀이
function solution(number) {
  return number.split('').reduce((acc, cur) => acc + +cur, 0) % 9;
}
