function solution(my_string, s, e) {
  // s~e 뒤집은 것을 변수에 저장하고 splice로 수정하기
  let rev = [...my_string.slice(s, e + 1)].reverse().join('');
  let a = [...my_string];
  a.splice(s, e - s + 1, rev);
  return a.join('');
}

// 다른 사람 풀이
function solution(my_string, s, e) {
  // 앞부분 + 뒤집을 부분 + 뒷부분을 이어붙임
  return (
    my_string.slice(0, s) + // s 이전 부분
    my_string
      .slice(s, e + 1)
      .split('')
      .reverse()
      .join('') + // s부터 e까지 뒤집음
    my_string.slice(e + 1) // e 이후 부분
  );
}
