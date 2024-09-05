function solution(my_string, is_suffix) {
  let reversed_my_string = my_string.split("").reverse("").join("");
  let reversed_is_suffix = is_suffix.split("").reverse("").join("");

  return reversed_my_string.startsWith(reversed_is_suffix) ? 1 : 0;
}

function solution(my_string, is_suffix) {
  return my_string.endsWith(is_suffix) ? 1 : 0;
}
