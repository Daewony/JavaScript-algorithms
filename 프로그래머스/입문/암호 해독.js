// 3 7 11

function solution(cipher, code) {
  var answer = "";
  for (let i = 0; i < cipher.length; i++) {
    if ((i + 1) % code === 0) answer += cipher[i];
  }
  return answer;
}

function solution(cipher, code) {
  var answer = "";
  for (let i = code - 1; i < cipher.length; i += code) {
    answer += cipher[i];
  }
  return answer;
}
