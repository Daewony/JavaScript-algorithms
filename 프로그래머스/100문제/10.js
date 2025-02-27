// 회전 시키기(반복문, s의 길이까지)
// stack을 생각함, 괄호에 맞게 pop을 하기
// 꼭 스택을 써야할까?
// [0,0,0] -> 이런식으로도 풀 수 있지 않나? 0보다 더 내려갈 순 없게하기
// 기호도 3가지만 있잖아? 그걸 매칭시켜서 풀면되지
// 이동은 어떻게 시킬꺼야?

const sign = {
  "(": "0",
  ")": "0",
  "[": "1",
  "]": "1",
  "{": "2",
  "}": "2",
};

function solution(s) {
  let answer = 0;
  const arr = [0, 0, 0];

  //
  for (let i = 0; i < s.length; i++) {
    const si = s[i];
    if (si === "(") arr[sign[si]]++;
    if (si === ")") {
      if (arr[sign[si]] > 0) arr[sign[si]]--;
    }
  }

  return answer;
}
