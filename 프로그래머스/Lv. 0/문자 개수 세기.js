function solution(my_string) {
  const arr = Array(52).fill(0);

  let sortedMy_string = [...my_string];
  for (const s of sortedMy_string) {
    let alp = changeCharCodeAt(s);

    let forUpperCase = 65;
    let forLowerCase = 71;

    if (s === s.toUpperCase()) arr[alp - forUpperCase]++;
    else arr[alp - forLowerCase]++;
  }

  return arr;
}
// 52개의 알파벳을 선언해서 사용하는 방법말고 다른방법으로 해결할 수 없나?
// 알파벳의 아스키코드 값으로 풀면 될거같음

function changeCharCodeAt(char) {
  return char.charCodeAt(0);
}

// ------------------------------------------------------------------------------------

// 다른 사람의 풀이
function solution(m) {
  var answer = [];
  let al = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  let a = [];
  a.length = 52;
  a.fill(0);

  m.split('').map((n) => {
    a[al.indexOf(n)] += 1;
  });

  return a;
}
