// function solution(arr) {
//     var answer = [];
//     let flag = true;
//     let len = arr.length;
//     let l = 1;

//     while(flag){
//         if(len===1) break;

//         if(len%2===1) flag=false;
//         len/=2;
//         l*=2;
//     }

//     if(flag) return arr;

//     l*=2;
//     while(arr.length<l){
//         arr.push(0);
//     }

//     return arr;
// }

function solution(arr) {
  let len = arr.length;
  let powerOfTwo = 1;

  // 2의 거듭제곱 중 len보다 크거나 같은 값 찾기
  while (powerOfTwo < len) {
    powerOfTwo *= 2;
  }

  // 배열의 길이가 목표 길이보다 작으면 0을 추가
  while (arr.length < powerOfTwo) {
    arr.push(0);
  }

  return arr;
}
