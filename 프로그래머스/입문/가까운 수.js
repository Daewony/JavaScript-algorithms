// 각 배열의 요소마다 n을 절대값으로 빼서 가장 작은수의 인덱스를 반환해서 array에 적용해서 반환처리
// 내꺼는 정렬되있다고 가정한채 진행함
// 1 0 1
// 11 10 99

function solution(array, n) {
  var answer = 999;
  let idx = -1;
  for (let i = 0; i < array.length; i++) {
    res = Math.abs(array[i] - n);
    console.log(res);
    if (answer > res || (answer === res && array[i] < array[idx])) {
      answer = res;
      idx = i;
    }
  }
  return array[idx];
}

function solution(array, n) {
  array.sort((a, b) => Math.abs(n - a) - Math.abs(n - b) || a - b);

  return array[0];
}