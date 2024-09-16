function solution(numLog) {
  let answer = '';
  for (let i = 0; i < numLog.length - 1; i++) {
    let now = numLog[i];
    let next = numLog[i + 1];

    if (now + 1 === next) {
      answer += 'w';
    } else if (now - 1 === next) {
      answer += 's';
    } else if (now + 10 === next) {
      answer += 'd';
    } else if (now - 10 === next) {
      answer += 'a';
    } else {
      console.log('오류');
    }
  }

  return answer;
}

// 습관: 고정된 값은 객체로 매핑해서 사용하자

// 다른 사람의 풀이
function solution(numLog) {
  let answer = '';
  const moves = {
    1: 'w',
    '-1': 's',
    10: 'd',
    '-10': 'a',
  };

  for (let i = 0; i < numLog.length - 1; i++) {
    const diff = numLog[i + 1] - numLog[i];
    answer += moves[diff];
  }

  return answer;
}

function solution(numLog) {
  const convert = {
    1: 'w',
    '-1': 's',
    10: 'd',
    '-10': 'a',
  };

  return numLog
    .slice(1)
    .map((v, i) => {
      return convert[v - numLog[i]];
    })
    .join('');
}
