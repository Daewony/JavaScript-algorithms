//

function solution(my_string) {
  var answer = 0;
  let arr = my_string.split("");
  let s = [];
  let a = "";
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= "0" && arr[i] <= "9") {
      a += arr[i];
      if (!(arr[i + 1] >= "0" && arr[i + 1] <= "9")) {
        s.push(a);
        a = "";
      }
    }
  }
  answer = s.map(Number).reduce((acc, cur) => {
    return acc + cur;
  }, 0);

  return answer;
}
