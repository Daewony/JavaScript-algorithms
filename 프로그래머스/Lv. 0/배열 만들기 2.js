// l <= x <= r
// 0 과 5로만 이루어짐
// new Set 이용하면 될듯 -> 중복처리하기

// 5
// 0 5
// 5
// 0 5
// 0 5
// 0 5
// 5

function solution(l, r) {
  var answer = [];

  for (let i = l; i <= r; i++) {
    let n = String(i).split('');
    const set = [...new Set(n)];
    if (
      (set.includes('5') && set.length === 1) ||
      (set.includes('5') && set.includes('0') && set.length === 2)
    )
      answer.push(i);
  }

  if (answer.length === 0) return [-1];

  return answer;
}

// 다른 사람 풀이

function solution(l, r) {
  let answer = [];

  for (let i = l; i <= r; i++) {
    const strNum = String(i);
    if (/^[05]+$/.test(strNum)) {
      // '0'과 '5'로만 이루어졌는지 확인
      answer.push(i);
    }
  }

  return answer.length > 0 ? answer : [-1];
}
