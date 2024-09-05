function solution(num_list) {
  let lastNum = num_list[num_list.length - 1];
  let lastPrevNum = num_list[num_list.length - 2];

  let result = lastNum > lastPrevNum ? lastNum - lastPrevNum : lastNum * 2;

  return [...num_list, result];
}
