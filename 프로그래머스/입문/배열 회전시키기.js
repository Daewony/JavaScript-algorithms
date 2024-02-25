function solution(numbers, direction) {
  var answer = [];

  if (direction === "right") {
    answer.push(numbers.pop());
    answer = [...answer, ...numbers];
  }
  if (direction === "left") {
    answer.push(numbers.shift());
    answer = [...numbers, ...answer];
  }
  return answer;
}
