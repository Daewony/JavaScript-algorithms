function solution(money) {
  let answer = Array(2).fill(0);
  let coffee = 5500;

  while (coffee <= money) {
    money -= coffee;
    answer[0] += 1;
  }
  answer[1] = money;

  return answer;
}