function solution(id_pw, db) {
  const [uid, upw] = id_pw;
  // 반복문으로 비교하면서 찾기 -> Map, key value로 찾는게 빠를텐데
  for (const [id, pw] of db) {
    if (uid === id) {
      if (upw === pw) return 'login';
      else return 'wrong pw';
    }
  }

  return 'fail';
}

// 다른 사람의 풀이
function solution(id_pw, db) {
  const [uid, upw] = id_pw; // id_pw에서 아이디와 비밀번호를 분리

  const user = db.find(([id, pw]) => id === uid); // 아이디가 일치하는 유저 찾기 -> 맞는 유저가 없으면 undefined 반환

  if (!user) return 'fail'; // 아이디가 없으면 "fail" 반환

  // user의 비밀번호와 입력된 비밀번호 비교
  return user[1] === upw ? 'login' : 'wrong pw';
}

function solution(id_pw, db) {
  const [id, pw] = id_pw;
  const map = new Map(db);
  return map.has(id) ? (map.get(id) === pw ? 'login' : 'wrong pw') : 'fail';
}
