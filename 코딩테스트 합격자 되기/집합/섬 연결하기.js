// costs의 내용을 비용에 맞게 객체로 저장
// 다리가 다 연결되었는지 확인하기 위한 배열 설정
// while문으로 최소 비용인 것을 선택하면서 최소비용 값을 추가함
// 다리가 다 연결되면 while문 종료

function solution(n, costs) {
  var answer = 0;
  let map = new Map();
  for (let [a, b, c] of costs) {
    if (!map.has(c)) {
      map.set(c, [[a, b]]);
    } else {
      let v = map.get(c);
      v.push([a, b]);
    }
  }
  console.log(map);

  return answer;
}
