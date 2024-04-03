// split을 통해 모든 문자 배열의 형태로 만들고, 길이만큼 문자열로 만든 후 answer 배열에 push를 하면됨
function solution(my_str, n) {
  var answer = [];
  let arr = my_str.split("");
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    console.log(str);
    if (str.length < n) {
      str += arr[i];
    } else {
      answer.push(str);
      str = "";
      str += arr[i];
    }
  }
  if (answer.length < Math.ceil(arr.length / n)) {
    answer.push(str);
  }
  return answer;
}
