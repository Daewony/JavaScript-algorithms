function solution(a, b, n) {
  let totalCola = 0; // 총 얻은 콜라 수

  while (n >= a) {
    // 빈병이 충분할 때 교환
    // 교환으로 얻은 콜라
    const exchanged = Math.floor(n / a) * b;
    // 총 콜라 수에 추가
    totalCola += exchanged;
    // 새 병 개수 = 얻은콜라 + 남은 빈 병
    n = exchanged + (n % a);
  }

  return totalCola;
}
