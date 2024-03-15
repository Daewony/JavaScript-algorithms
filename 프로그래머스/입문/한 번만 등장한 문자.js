// 정렬을 한 후에 같은 알파벳이 없는지 확인하고 출력하기

function solution(s) {
  var answer = "";
  s = s.split("").sort().join("");
  for (let i = 0; i < s.length; i++) {
    if (s.split(s[i]).length === 2) answer += s[i];
  }
  return answer;
}