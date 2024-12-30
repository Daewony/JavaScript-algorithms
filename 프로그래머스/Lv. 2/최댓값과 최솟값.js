// 숫자 -> 정렬 필요함 -> sort 활용 문자열 합침
function solution(s) {
  const arr = s.split(' ').map((v) => Number(v));
  const sortedArr = arr.sort((a, b) => a - b);
  const res = `${String(sortedArr[0])} ${String(
    sortedArr[sortedArr.length - 1]
  )}`;
  return res;
}

// Math.max를 먼저 생각했는데 spread operator를 사용하지 않고 배열을 넣어서 NaN이 나옴
// => Math.max할때 spread operator 잊지말자
