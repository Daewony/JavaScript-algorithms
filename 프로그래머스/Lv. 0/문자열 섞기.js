function solution(str1, str2) {
  let i = 1;
  str1 = [...str1];
  for (const s of str2) {
    str1.splice(i, 0, s);
    i += 2;
  }
  return str1.join('');
}

// 다른 사람 풀이

function solution(str1, str2) {
  let result = '';
  for (let i = 0; i < str1.length; i++) {
    result += str1[i] + str2[i];
  }
  return result;
}

function solution(str1, str2) {
  return [...str1].map((x, idx) => x + str2[idx]).join('');
}
