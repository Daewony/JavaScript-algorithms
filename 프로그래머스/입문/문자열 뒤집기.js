function solution(my_string) {
  let arr = "";
  for (let i = my_string.length - 1; i >= 0; i--) {
    arr += my_string[i];
  }
  return arr;
}