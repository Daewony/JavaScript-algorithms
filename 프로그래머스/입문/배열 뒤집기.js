function solution(num_list) {
  // return num_list.reverse();
  let re = [];
  for (let i = 0; i < num_list.length; i++) {
    re.push(num_list[num_list.length - 1 - i]);
  }
  return re;
}