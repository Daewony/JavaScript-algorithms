function solution(A, B) {
  let cnt = 0;

  for (let i = 0; i < A.length; i++) {
    if (A === B) return cnt;
    cnt++;
    B = [...B];
    let t = B.shift();
    B.push(t);
    B = B.join('');
  }

  return -1;
}

// 다른 사람 풀이

let solution = (a, b) => (b + b).indexOf(a);
