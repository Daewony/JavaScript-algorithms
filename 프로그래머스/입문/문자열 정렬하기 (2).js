function solution(my_string) {
  var answer = "";
  let arr = my_string.toLowerCase().split("");
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = arr.length - 1; j >= 0; j--) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr.join("");
}
function solution(my_string) {
  return my_string.toLowerCase().split("").sort().join("");
}
