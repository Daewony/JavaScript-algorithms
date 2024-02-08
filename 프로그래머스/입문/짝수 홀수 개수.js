function solution(num_list) {
  let answer = [];
  answer.push(num_list.filter((e) => e % 2 === 0).length);
  answer.push(num_list.filter((e) => e % 2 !== 0).length);
  return answer;
}

// 메서드 없이 풀어보자