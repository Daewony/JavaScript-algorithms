// 정답은 [ 번호, 차례 ] 형태로 return 해주세요.
// 만약 주어진 단어들로 탈락자가 생기지 않는다면, [0, 0]을 return 해주세요.

// 1. 중복된 단어가 있는지 비교하기
//  1-1. 집합으로 처리해서 길이를 비교하여 같으면 탈락자 생기지 않음 -> [0,0] 처리
//  1-2. 중복된 단어가 있으면 어떤 단어가 중복된 단어인지 찾기
// 2. 중복된 단어 or 틀린 단어 마지막 index를 구하고, (index % n) + 1 해서 번호 구하기
// 2. 중복된 단어 or 틀린 단어 마지막 index를 구하고, Math.ceil(index / n) 해서 차례 구하기

// 끝말잇기 탈락의 경우
// 1. 중복된 단어 말함
// 2. 단어의 시작이 틀림

// 관건
// 중복된 단어를 어떻게 찾지?\
// 1. 이중 for문으로 찾기
// 2. filter를 통해서 찾기
// 3. 객체로 만들고 넣어서 길이가 2이상인 것을 찾기(정리해서 같은 곳에 놓기)
// 틀린 단어를 어떻게 찾지?
// 1. 현재 단어의 길이 - 1의 문자 === 다음 단어의 첫 번째 단어 같은지 반복문 돌리는 방법

function solution(n, words) {
  var answer = [];

  let map = new Map();
  // let ew;

  // 1. 중복된 단어 찾기
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    if (!map.has(word)) map.set(word, 1);
    else {
      // let v = map.get(word)+1;
      // map.set(word,v);
      // ew = word;
      // 번호 처리
      let num = (i % n) + 1;
      answer.push(num);

      // 차례 처리
      // let way = Math.ceil(i/n);
      let way = Math.floor(i / n) + 1;
      answer.push(way);

      return answer;
    }
  }

  // 2. 틀린 단어 찾기 = 비교하기
  for (let i = 1; i < words.length; i++) {
    let prevWord = words[i - 1];
    let word = words[i];
    let prevLastChar = prevWord[prevWord.length - 1];
    let FirstChar = word[0];
    if (prevLastChar !== FirstChar) {
      // ew = FirstChar;
      // 번호 처리
      let num = (i % n) + 1;
      answer.push(num);

      // 차례 처리
      let way = Math.floor(i / n) + 1;
      answer.push(way);

      return answer;
    }
  }

  return [0, 0];
}

//
