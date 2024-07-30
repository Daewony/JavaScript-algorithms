function solution(s) {
  let arr = [];
  for (let i of s.split("")) {
    // console.log(i);
    if (i === "(") arr.push(i);
    else if (i === ")") arr.pop();
    // else {
    //   return console.log("잘못된 입력함");
    // }
  }
  return arr.length === 0 ? true : false;
}

console.log(solution("(())()"));
console.log(solution("((())()"));
