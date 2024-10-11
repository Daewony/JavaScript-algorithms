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

function solution(A, B) {
  if (A === B) return 0; // 처음부터 같다면 0을 반환

  const len = A.length;

  for (let i = 1; i < len; i++) {
    A = A[len - 1] + A.slice(0, len - 1); // 오른쪽으로 한 칸 밀기
    if (A === B) return i; // B와 같으면 그때의 횟수 반환
  }

  return -1; // 끝까지 같지 않으면 -1 반환
}
