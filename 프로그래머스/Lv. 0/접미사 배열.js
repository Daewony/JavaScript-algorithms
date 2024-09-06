function solution(my_string) {
  var answer = [];
  for (let i = 0; i < my_string.length; i++) {
    let w = my_string.slice(i, my_string.length);
    answer.push(w);
  }

  return answer.sort();
}

function solution(my_string) {
  return [...my_string].map((_, i) => my_string.slice(i)).sort();
}
