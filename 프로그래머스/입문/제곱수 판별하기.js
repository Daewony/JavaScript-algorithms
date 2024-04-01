// 루트를 씌웠을때 정수가 나오냐로 판단하고 싶었음
// 144 -> 12*12
//
function solution(n) {
  return Math.floor(Math.sqrt(n)) === Math.sqrt(n) ? 1 : 2;
}
