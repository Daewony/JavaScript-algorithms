function solution(record) {
  var answer = [];
  // 객체에 저장하기
  let map = new Map();

  // 한번 전체적으로 다 읽고 난 후 객체 상태 확인하기
  for (let i of record) {
    let id = i.split(" ")[1];
    let nk = i.split(" ")[2];
    console.log(id, nk);
    if (!map.has(id)) {
    }
  }

  return answer;
}
