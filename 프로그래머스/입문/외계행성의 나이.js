function solution(age) {
  var answer = "";
  let idx = String(age);
  let alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
  for (let i = 0; i < idx.length; i++) {
    console.log(alpha[idx[i]]);
    answer += alpha[idx[i]];
  }

  return answer;
}
//  (). [] 감싸는걸로 시간낭비함