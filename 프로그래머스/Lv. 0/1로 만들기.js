function solution(num_list) {
  var answer = 0;
  for (const n of num_list) {
    answer += devideCount(n);
  }
  return answer;
}

function devideCount(num) {
  let count = 0;
  while (num > 1) {
    if (num % 2 === 0) num /= 2;
    else num = (num - 1) / 2;
    count++;
  }

  return count;
}
