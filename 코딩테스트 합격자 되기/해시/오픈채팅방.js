function solution(record) {
  var answer = [];
  // 객체에 저장하기
  let map = new Map();

  // 한번 전체적으로 다 읽고 난 후 객체 상태 확인하기
  for (let i of record) {
    let parts = i.split(" ");
    let action = parts[0];
    let id = parts[1];
    let nickname = parts[2];

    // Enter와 Change 명령에서 닉네임을 업데이트
    if (action === "Enter" || action === "Change") {
      map.set(id, nickname);
    }
  }

  for (const i of record) {
    let st = i.split(" ")[0];
    let id = i.split(" ")[1];
    let nk = i.split(" ")[2];

    switch (st) {
      case "Enter":
        answer.push(map.get(id) + "님이 들어왔습니다.");
        break;
      case "Leave":
        answer.push(map.get(id) + "님이 나갔습니다.");
        break;
      default:
        break;
    }
  }

  return answer;
}
