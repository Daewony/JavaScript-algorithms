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

// 다른 사람의 풀이
function solution(my_string, queries) {
  let strArr = my_string.split(''); // 문자열을 배열로 변환

  // queries 순차적으로 처리
  for (const [s, e] of queries) {
    // 부분 문자열을 뒤집고 다시 원래 배열에 넣음
    const reversed = strArr.slice(s, e + 1).reverse();
    strArr.splice(s, e - s + 1, ...reversed); // 부분을 뒤집은 것으로 교체
  }

  return strArr.join(''); // 배열을 다시 문자열로 변환
}

function solution(my_string, queries) {
  let str = my_string.split('');
  queries.forEach(([start, end]) => {
    const changeStr = str.slice(start, end + 1);
    str.splice(start, changeStr.length, ...changeStr.reverse());
  });
  return str.join('');
}
