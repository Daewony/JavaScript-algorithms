// 정규표현식이랑 filter로 풀릴거같음

function solution(my_string) {
  var answer = Array.from(my_string)
    .filter((t) => t >= "0" && t <= "9")
    .map(Number)
    .sort((a, b) => a - b);

  return answer;
}
