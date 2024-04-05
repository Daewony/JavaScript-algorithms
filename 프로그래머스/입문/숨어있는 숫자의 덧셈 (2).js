function solution(my_string) {
  var answer = 0;
  let arr = my_string.split("");
  let s = [];
  for (let i = 0; arr.length; i++) {
    if (arr[i] >= "0" && arr[i] < "9") {
      s.push(arr[i]);
    }
  }

  return answer;
}
