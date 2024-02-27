// 배열의 합을 할 줄 아냐

function solution(my_string) {
  var answer = 0;

  return Array.from(my_string)
    .filter((t) => t >= "0" && t <= "9")
    .map(Number)
    .reduce((acc, cur) => acc + cur);
}
