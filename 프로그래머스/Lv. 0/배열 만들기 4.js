// 변수 i=0
// 빈배열이면 stk에 arr[0] 넣기 & i+1 하기
// stk 빈배열이 아니면
//  1. (stk 마지막 원소 < arr[i] ) => stk.push(arr[i])
//  2. (stk 마지막 원소 >= arr[i]) => stk.pop();
// 언제 작업이 마치는거지? i가 arr의 길이보다 작을때 까지

function solution(arr) {
  let i = 0;
  const stk = [];

  while (i < arr.length) {
    if (stk.length === 0) {
      stk.push(arr[i]);
      i++;
    } else {
      if (stk[stk.length - 1] < arr[i]) {
        stk.push(arr[i]);
        i++;
      } else {
        stk.pop();
      }
    }
  }

  return stk;
}

// 다른 사람 풀이

// 코드 중복을 줄이기 위해 stk.length를 변수에 저장함

function solution(arr) {
  const stk = [];

  for (let i = 0; i < arr.length; ) {
    const last = stk[stk.length - 1];

    if (stk.length === 0 || last < arr[i]) {
      stk.push(arr[i]);
      i++;
    } else {
      stk.pop();
    }
  }
  return stk;
}
