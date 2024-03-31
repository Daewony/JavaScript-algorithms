const q = (qz) => {
  let nqz = qz.split(" ");
  let sum = 0;
  let res = "";
  if (nqz[1] === "+") {
    sum = Number(nqz[0]) + Number(nqz[2]);
    res = sum === Number(nqz[nqz.length - 1]) ? "O" : "X";
  } else if (nqz[1] === "-") {
    sum = Number(nqz[0]) - Number(nqz[2]);
    res = sum === Number(nqz[nqz.length - 1]) ? "O" : "X";
  }
  return res;
};

function solution(quiz) {
  var answer = [];
  for (let i = 0; i < quiz.length; i++) {
    answer.push(q(quiz[i]));
  }

  return answer;
}
