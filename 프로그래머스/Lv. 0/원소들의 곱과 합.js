function solution(num_list) {
  let mul = num_list.reduce((acc, cur) => acc * cur, 1);
  let sumWithSquar = num_list.reduce((acc, cur) => acc + cur, 0);
  sumWithSquar *= sumWithSquar;

  return mul < sumWithSquar ? 1 : 0;
}

// chatGPT 풀이 => 변수를 더 명확하게 표현하며 작게 만들기
function solution(num_list) {
  const product = num_list.reduce((acc, cur) => acc * cur, 1);
  const sum = num_list.reduce((acc, cur) => acc + cur, 0);
  const sumSquared = sum * sum;

  return product < sumSquared ? 1 : 0;
}
