// for문 풀이
function solution(num_list) {
  for (let i = 0; i < num_list.length; i++) {
    if (num_list[i] < 0) return i;
  }

  return -1;
}

// findIndex 풀이
function solution(num_list) {
  return num_list.findIndex((num) => num < 0);
}
