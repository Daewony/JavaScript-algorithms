function solution(code) {
  let ret = '';
  let mode = 0;

  for (let i = 0; i < code.length; i++) {
    let v = code[i];
    if (mode === 0) {
      if (v !== '1' && i % 2 === 0) {
        ret += v;
      }

      if (v === '1') {
        mode = 1;
      }
    } else if (mode === 1) {
      if (v !== '1' && i % 2 === 1) {
        ret += v;
      }

      if (v === '1') {
        mode = 0;
      }
    } else {
      console.log('잘못된 mode 입력');
    }
  }

  if (ret.length === 0) return 'EMPTY';

  return ret;
}

// 다른 사람 풀이
function solution(code) {
  let ret = [];
  let mode = 0;

  for (let i = 0; i < code.length; i++) {
    let v = code[i];

    if (v === '1') {
      mode = 1 - mode; // mode를 0에서 1로, 1에서 0으로 토글
    } else {
      if (mode === 0 && i % 2 === 0) {
        ret.push(v); // mode가 0일 때 짝수 인덱스의 문자를 추가
      } else if (mode === 1 && i % 2 === 1) {
        ret.push(v); // mode가 1일 때 홀수 인덱스의 문자를 추가
      }
    }
  }

  return ret.length === 0 ? 'EMPTY' : ret.join('');
}

function solution(code) {
  let answer = '';
  let mode = 0;

  for (let i = 0; i < code.length; i += 1) {
    if (Number(code[i]) === 1) {
      mode = mode === 1 ? 0 : 1;
    }
    if (Number(code[i]) !== 1 && i % 2 === mode) {
      answer += code[i];
    }
  }
  return answer.length > 0 ? answer : 'EMPTY';
}
