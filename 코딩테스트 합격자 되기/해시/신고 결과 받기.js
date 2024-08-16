function solution(id_list, report, k) {
  var answer = [];

  // 신고자에 대한 데이터 저장
  let map = new Map();

  // id_list로 먼저 초기화 세팅하기
  for (const id of id_list) {
    map.set(id, { total: 0, reporter: [] });
  }

  // 신고 처리하기
  for (let i of report) {
    // id = i.split(' ')[0];
    // rid = i.split(' ')[1];
    let [id, rid] = i.split(" ");

    let info = map.get(rid);

    // 중복 신고 처리
    if (info) {
      if (!info.reporter.includes(id)) {
        info.total += 1;
        info.reporter.push(id);
      }
    }
  }

  let res = new Map();

  for (const id of id_list) {
    res.set(id, 0);
  }

  // 신고 결과에 따른 결과 처리
  for (let i of id_list) {
    let t = map.get(i).total;
    if (t >= k) {
      for (let id of map.get(i).reporter) {
        let resv = res.get(id);
        res.set(id, resv + 1);
        // resv+=1;
      }
    }
  }

  for (let i of id_list) {
    let r = res.get(i);
    answer.push(r);
  }

  return answer;
}
