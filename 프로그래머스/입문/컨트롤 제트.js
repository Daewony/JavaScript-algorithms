function solution(s) {
  var answer = 0;
  let arr = [];
  s.split(" ").forEach((e) => {
    if (e === "Z") arr.pop();
    else arr.push(Number(e));
  });
  answer = arr.reduce((acc, cur) => acc + cur, 0);
  return answer;
}
