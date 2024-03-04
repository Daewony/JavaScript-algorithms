//

function solution(my_string, num1, num2) {
  var answer = "";

  my_string = [...my_string];
  let a = my_string[num1];
  let b = my_string[num2];
  my_string[num1] = b;
  my_string[num2] = a;

  return my_string.join("");
}
