// arr 이용 => stk 배열 만들기
// i=0, i<arr.length
// stk.length === 0 -> stk.push(arr[i]); i++;
// stk.length !== 0 -> stk[stk.length-1] === arr[i] ? stk.pop(); i++ : stk.push(arr[i]); i++

function solution(arr) {
  const stk = [];

  for (let i = 0; i < arr.length; i++) {
    if (stk.length === 0) {
      stk.push(arr[i]);
    } else {
      stk[stk.length - 1] === arr[i] ? stk.pop() : stk.push(arr[i]);
    }
  }
  if (stk.length === 0) return [-1];

  return stk;
}

// 다른 사람 풀이
function solution(arr) {
  const stk = [];

  for (let i = 0; i < arr.length; i++) {
    // stk가 비어있으면 arr[i]를 추가
    if (stk.length === 0) {
      stk.push(arr[i]);
    } else {
      // stk의 마지막 원소와 arr[i] 비교
      if (stk[stk.length - 1] === arr[i]) {
        stk.pop(); // 같으면 제거
      } else {
        stk.push(arr[i]); // 다르면 추가
      }
    }
  }

  // stk가 비어있으면 [-1] 반환
  return stk.length === 0 ? [-1] : stk;
}

function solution(arr) {
  let stk = [];
  arr.forEach((x, i) => {
    if (x !== stk[stk.length - 1]) {
      stk.push(x);
    } else {
      stk.splice(-1);
    }
    //console.log("배열 추가 삭제 진행과정 : ",stk)
  });

  if (stk.length == 0) {
    stk = [-1];
  }
  return stk;
}
