// map을 사용해서 intStrs를 slice(s,s+l) 하기
// filter로 k값보다 커야함

function solution(intStrs, k, s, l) {
  return intStrs.map((v) => Number(v.slice(s, s + l))).filter((num) => num > k);
}

// 다른 사람 풀이
function solution(intStrs, k, s, l) {
  return intStrs.map((v) => +v.slice(s, s + l)).filter((v) => v > k);
}

function solution(intStrs, k, s, l) {
  return intStrs.reduce((acc, v) => {
    const num = Number(v.slice(s, s + l));
    if (num > k) acc.push(num);
    return acc;
  }, []);
}
