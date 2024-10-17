function solution(my_string, s, e) {
  // s~e 뒤집은 것을 변수에 저장하고 splice로 수정하기
  let rev = [...my_string.slice(s, e + 1)].reverse().join('');
  let a = [...my_string];
  a.splice(s, e - s + 1, rev);
  return a.join('');
}
