// 1부터 팩토리얼을 구해서 n 값보다 작거나 같은 지 확인해서 처리

function solution(n) {
  const fac = (i) => {
    let sum = 1;
    for (; i >= 1; i--) {
      sum *= i;
    }
    return sum;
  };
  let i = 1;
  while (true) {
    if (fac(i) > n) {
      return (i -= 1);
    }
    i++;
  }
}
