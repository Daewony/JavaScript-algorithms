// includes 메서드 없이 어떻게 풀까? -> includes 메서드는 어떻게 만들었을까?
function solution(str1, str2) {
  return str1.includes(str2) ? 1 : 2;
}

// function solution(str1, str2) {
//     return str1.split(str2).length > 1 ? 1 : 2;
// }
