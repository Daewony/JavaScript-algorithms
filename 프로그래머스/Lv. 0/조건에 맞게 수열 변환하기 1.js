// 나의 풀이
function solution(arr) {
  arr.forEach((a, i, ar) => {
    if (50 <= a && a % 2 === 0) {
      ar[i] /= 2;
    } else if (a < 50 && a % 2 === 1) {
      ar[i] *= 2;
    }
  });
  return arr;
}

// 다른 사람의 풀이
function solution(arr) {
  return arr.map((num) => {
    if (num >= 50 && num % 2 === 0) {
      return num / 2;
    } else if (num < 50 && num % 2 === 1) {
      return num * 2;
    }
    return num;
  });
}
