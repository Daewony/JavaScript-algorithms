function solution(arr1, arr2) {
  let len1 = arr1.length;
  let len2 = arr2.length;
  let sum1 = arr1.reduce((acc, cur) => acc + cur, 0);
  let sum2 = arr2.reduce((acc, cur) => acc + cur, 0);

  if (len1 > len2) return 1;
  else if (len1 === len2) {
    if (sum1 > sum2) return 1;
    else if (sum1 === sum2) return 0;
    else return -1;
  } else return -1;
}

// 다른 사람 풀이
function solution(arr1, arr2) {
  // 배열 길이 비교
  if (arr1.length > arr2.length) return 1;
  if (arr1.length < arr2.length) return -1;

  // 배열 길이가 같다면 합을 비교
  const sum1 = arr1.reduce((acc, cur) => acc + cur, 0);
  const sum2 = arr2.reduce((acc, cur) => acc + cur, 0);

  if (sum1 > sum2) return 1;
  if (sum1 < sum2) return -1;

  return 0;
}
