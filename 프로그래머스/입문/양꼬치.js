// function solution(n, k) {
//     let f = 12000;
//     let d = 2000;

//     return n*f + k*d - Math.floor(n/10)*d
// }

function solution(n, k) {
  let f = 12000;
  let d = 2000;

  return n * f + (k - Math.floor(n / 10)) * d;
}