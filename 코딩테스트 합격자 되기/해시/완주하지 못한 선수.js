// 2. 두번째 풀이

// 배운점: map.set을 하나의 반복문으로 추가 및 처리할 수 있다.
function solution(participant, completion) {
  const map = new Map();

  for (let i = 0; i < participant.length; i++) {
    let a = participant[i];

    map.set(a, (map.get(a) || 0) + 1);

    if (i < completion.length) {
      let b = completion[i];
      map.set(b, (map.get(b) || 0) - 1);
    }
  }

  for (let [k, v] of map) {
    if (v > 0) return k;
  }

  return "";
}

// 1. 첫번째 풀이(나의 풀이)

// 객체를 만들어서 각 이름이 나올때 마다, 이름에 대한 수를 값으로 저장
// 이름의 값이 1이면 그것의 이름을 return 하기

function solution(participant, completion) {
  let answer = "";

  // Map 생성
  let map = new Map();

  // 키-값 쌍 추가
  // for(let item of completion){
  for (let item of participant) {
    if (!map.get(item)) {
      map.set(item, 1);
    } else {
      map.set(item, map.get(item) + 1);
    }
  }

  // 중복 처리가 안되어있음
  for (let item of completion) {
    map.set(item, map.get(item) - 1);
  }

  for (let [key, value] of map) {
    if (value >= 1) answer = key;
  }

  return answer;
}
