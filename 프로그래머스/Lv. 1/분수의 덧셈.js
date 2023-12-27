// 공통 분모 만들기
// 최대 공약수 찾기
// 공통분모를 통해 기약분수로 만들기

function solution(numer1, denom1, numer2, denom2) {
  let numer = numer1 * denom2 + numer2 * denom1;
  let denom = denom1 * denom2;
  let gcd = findGCD(numer, denom);

  numer /= gcd;
  denom /= gcd;

  return [numer, denom];
}

function findGCD(a, b) {
  if (b === 0) {
    return a;
  } else {
    return findGCD(b, a % b);
  }
}
