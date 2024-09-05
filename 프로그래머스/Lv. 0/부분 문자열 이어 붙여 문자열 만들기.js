function solution(my_strings, parts) {
  var answer = "";
  for (let i = 0; i < my_strings.length; i++) {
    let [s, e] = parts[i];
    answer += my_strings[i].slice(s, e + 1);
  }

  return answer;
}

// 다른 사람의 풀이
function solution(my_strings, parts) {
  return parts
    .map(([s, e], i) => {
      return my_strings[i].slice(s, e + 1);
    })
    .join("");
}

function solution(my_strings, parts) {
  return parts.reduce(
    (acc, [s, e], i) => acc + my_strings[i].slice(s, e + 1),
    ""
  );
}
