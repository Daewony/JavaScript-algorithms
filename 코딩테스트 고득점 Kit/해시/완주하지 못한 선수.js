// 완주하지 못한 선수의 이름을 return
// 특정한 하나를 찾고자 함 -> 배열을 이용하기
// 특장한 하나를 빠르게 찾기 위한 알고리즘: 해시
// Object, Map, Set이 있는데 각각 사용법을 모름
// map에 참가자 전체를 담기 key-value, 이름-인원수
// completion를 순회하면서, 맞는 key 값에 value값을 줄이기
// value 값이 0이 아닌 것을 리턴하면 해결됨

function solution(participant, completion) {
  var answer = "";

  const map = new Map();

  // map에 참가자 전체를 담기 key-value, 이름-인원수
  for (const part of participant) {
    if (!map.has(part)) {
      map.set(part, 1);
    } else {
      map.set(part, map.get(part) + 1);
    }
  }

  // completion를 순회하면서, 맞는 key 값에 value값을 줄이기
  for (const comp of completion) {
    if (map.has(comp)) {
      map.set(comp, map.get(comp) - 1);
    }
  }

  // value 값이 0이 아닌 것을 리턴하면 해결됨
  for (const [key, value] of map) {
    if (value !== 0) return key;
  }

  return answer;
}
