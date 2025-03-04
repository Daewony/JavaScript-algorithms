// 짝지어 제거 -> cursor1, cursor2를 활용해, while문으로 반복하지만 cursor2가 끝까지 가고 제거가 안된다면 0을반환
// 정렬? 예외 있음
// 스택 사용

function solution(s) {
  const answer = [];

  for (const i of s) {
    const len = answer.length;
    //          없을때 넣기
    if (len === 0) {
      answer.push(i);
      continue;
    }
    //         이전 문자와 같다면 빼내기
    const pre = answer[len - 1];
    if (i === pre) answer.pop();
    else answer.push(i);
  }

  return answer.length === 0 ? 1 : 0;
}

// 푸시도 중복이네
function solution2(s) {
  const answer = [];

  for (const i of s) {
    const len = answer.length;
    //          없을때 넣기
    if (len === 0 && i !== answer[len - 1]) {
      answer.push(i);
    } else {
      //         이전 문자와 같다면 빼내기
      answer.pop();
    }
  }

  return answer.length === 0 ? 1 : 0;
}
