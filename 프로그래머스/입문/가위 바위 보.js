function solution(rsp) {
  var answer = "";
  win = {
    2: "0",
    0: "5",
    5: "2",
  };
  rsp = [...rsp];
  // console.log(rsp)
  for (let i = 0; i < rsp.length; i++) {
    answer += win[rsp[i]];
  }
  return answer;
}