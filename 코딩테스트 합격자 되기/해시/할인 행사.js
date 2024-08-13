// want와 number를 합쳐서 테이블로 만들고
// discount의 10일치를 객체로 만들어서 최소의 갯수를 충족하는지만 보면 될듯함

function solution(want, number, discount) {
  var answer = 0;
  // Map 객체 선언
  let mapA = new Map();

  // want와 number 합쳐서 mapA에 넣기
  for (let i = 0; i < want.length; i++) {
    mapA.set(want[i], number[i]);
  }

  // discount 0~9 / length-10 ~ length -1 까지 돌리면서 mapB에 담기
  for (let i = 0; i < discount.length - 10 + 1; i++) {
    let mapB = new Map();
    for (let j = i; j < i + 10; j++) {
      let item = discount[j];
      mapB.set(item, (mapB.get(item) || 0) + 1);
    }

    // mapB에 담은 것을 mapA와 비교해서 충족하면 answer 값을 증가

    let flag = true;
    for (let [k, v] of mapA) {
      if (!mapB.get(k)) flag = false;
      // if (mapA.get(k) > mapB.get(k)) flag = false;
      if (v > mapB.get(k)) flag = false;
    }
    if (flag) {
      answer++;
    }
  }

  return answer;
}
