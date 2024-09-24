function solution(q, r, code) {
  var answer = '';
  [...code].forEach((s, i) => {
    if (i % q === r) answer += s;
  });

  return answer;
}

// 다른 사람의 풀이
function solution(q, r, code) {
  return [...code].filter((_, i) => i % q === r).join('');
}

function solution(q, r, code) {
  let answer = '';
  for (let i = r; i < code.length; i += q) answer += code[i];
  return answer;
}

function solution(q, r, code) {
  var answer = '';
  [...code].map((v, idx) => (idx % q === r ? (answer += v) : answer));
  return answer;
}
