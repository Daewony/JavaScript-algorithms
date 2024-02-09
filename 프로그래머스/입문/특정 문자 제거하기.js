function solution(my_string, letter) {
  let answer = [...my_string];
  for (let i = 0; i < answer.length; i++) {
    if (answer[i] === letter) {
      answer[i] = "";
    }
  }
  return answer.join("");
}