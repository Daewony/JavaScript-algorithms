function solution(my_string) {
  var answer = "";
  // my_string.forEach((e)=>{
  //     // if(e === e.toLowerCase()){
  //     //     e = e.toUpperCase();
  //     // }
  // })
  // 왜 안되지?

  for (let i = 0; i < my_string.length; i++) {
    // console.log(my_string[i].toLowerCase(), my_string[i].toUpperCase())
    if (my_string[i] === my_string[i].toLowerCase()) {
      // my_string[i] = my_string[i].toUpperCase();
      answer += my_string[i].toUpperCase();
      // console.log(my_string)
    }
    if (my_string[i] === my_string[i].toUpperCase()) {
      // my_string[i] = my_string[i].toLowerCase();
      answer += my_string[i].toLowerCase();
    }
  }

  return answer;
}

function solution(my_string) {
  var answer = "";
  for (let c of my_string) answer += c === c.toLowerCase() ? c.toUpperCase() : c.toLowerCase();
  return answer;
}