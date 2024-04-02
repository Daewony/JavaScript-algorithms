function solution(array) {
  var answer = 0;
  let arr = array.join("").split("");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "7") answer += 1;
  }
  return answer;
}
