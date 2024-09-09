function solution(num_str) {
  return num_str.split("").reduce((acc, cur) => Number(acc) + Number(cur), 0);
}

function solution(num_str) {
  return [...num_str].reduce((acc, cur) => Number(acc) + Number(cur), 0);
}
