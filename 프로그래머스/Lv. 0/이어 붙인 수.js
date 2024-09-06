// 나의 풀이
function solution(num_list) {
  let odd = "";
  let even = "";

  for (const num of num_list) {
    if (num % 2 !== 0) odd += num;
    else even += num;
  }

  return +odd + +even;
}

// chatGPT 풀이 => 메서드 활용
function solution(num_list) {
  const odd = num_list
    .filter((num) => num % 2 !== 0)
    .reduce((acc, cur) => acc + cur, "");
  const even = num_list
    .filter((num) => num % 2 === 0)
    .reduce((acc, cur) => acc + cur, "");

  return +odd + +even;
}
