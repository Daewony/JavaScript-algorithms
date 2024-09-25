function solution(arr) {
  var answer = 0;

  while (1) {
    let a = arr.join('');
    arr = arr.map((v, i) => {
      if (v >= 50 && v % 2 === 0) return (v = v / 2);
      else if (v < 50 && v % 2 === 1) {
        return v * 2 + 1 > 100 ? 100 : v * 2 + 1;
      } else {
        return v;
      }
    });
    let b = arr.join('');
    if (a === b) break;

    answer++;
  }

  return answer;
}

// 복잡해보여.. 가독성 구림

// 다른 사람의 풀이
function solution(arr) {
  var answer = 0;
  let before = [-1];

  while (!arr.every((e, idx) => e == before[idx])) {
    before = [...arr];

    arr = arr.map((e) => {
      if ((e >= 50) & (e % 2 == 0)) return e / 2;
      if ((e < 50) & (e % 2 != 0)) return e * 2 + 1;
      return e;
    });
    answer++;
  }
  return answer - 1;
}
