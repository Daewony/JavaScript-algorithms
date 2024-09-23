function solution(myStr) {
  var answer = [];

  let c = '';

  for (const s of myStr) {
    if (s !== 'a' && s !== 'b' && s !== 'c') {
      c += s;
    } else {
      if (c) answer.push(c);
      c = '';
    }
  }
  if (c) answer.push(c);

  return answer.length > 0 ? answer : ['EMPTY'];
}

// 다른 사람의 풀이
function solution(myStr) {
  const result = myStr.split(/[abc]/).filter(Boolean); // "a", "b", "c"를 기준으로 나누고 빈 문자열 제거
  return result.length > 0 ? result : ['EMPTY']; // 빈 배열일 경우 "EMPTY" 반환
}

const solution = (s) => s.match(/[^a-c]+/g) || ['EMPTY'];

function solution(myStr) {
  const list = myStr.split(/[a|b|c]/).filter((str) => str);
  return list.length ? list : ['EMPTY'];
}
