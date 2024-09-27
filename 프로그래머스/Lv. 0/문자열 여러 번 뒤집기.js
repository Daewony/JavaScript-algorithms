function solution(my_string, queries) {
  my_string = [...my_string];

  // 구조 분해 할당
  for (const [s, e] of queries) {
    // reverse 된 것을 구하기
    let rev = my_string.slice(s, e + 1).reverse();

    // 문자열 수정하기
    my_string.splice(s, e - s + 1, ...rev);
  }
  return my_string.join('');
}
