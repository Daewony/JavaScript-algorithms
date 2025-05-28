// 핵심 키워드: 가장 짧은 변환 과정,
// 자료구조: 큐
// 알고리즘: BFS, 가중치도 없고, 단어 사용했는지 여부와 가장 짧은 거리 라는 키워드가 근거로 생각함
// 목표: 가장 짧은 변환 과정을 찾으려고 함, 못찾을 시 0 반환
// 종료 조건:
// words 안에 target이 있는지 확인하기, 없으면 0 반환
// target이 있다면 몇단계인지 반환

// 상태값:
// - 해당 단어를 이미 사용했는지 여부
// - 비교인데..
// - 몇 단계의 과정인지 기록 필요
// -
// 시간복잡도
// n(n-1)/2 정도 생각함
// 시작과 타켓을 앎 -> 중간에 어떻게 비교해서 앞으로 나아가냐가 관건임,

class Queue {
  items = [];
  front = 0;
  rear = 0;

  push(item) {
    this.items.push(item);
    this.rear++;
  }

  pop() {
    return this.items[this.front++];
  }

  get length() {
    return this.rear - this.front;
  }
}

function isOneDiff(a, b) {
  let diff = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) diff++;
    if (diff > 1) return false;
  }
  return diff === 1;
}

function solution(begin, target, words) {
  let answer = 0;
  const visited = new Array(words.length).fill(false);
  console.log(visited);

  const q = new Queue();
  q.push([begin, 0]); // 시작 단어, 방문..?, 몇단계

  // words 안에 target이 있는지 확인하기, 없으면 0 반환
  // 확인 방법: for 문, includes 메서드..
  if (!words.includes(target)) return 0;

  // 한개의 알파벳만으로 바꿀 수 있는 words 에 해당 단어가 있는지 판별 -> 중복 활용
  while (q.length > 0) {
    const [cw, stage] = q.pop();

    if (cw === target) {
      return stage;
    }

    // const set = new Set(); => set은 글자 위치별 차이를 알수 없음
    for (const w of words) {
      if (isOneDiff(cw, w) && !visited[w]) {
        q.push([w, stage + 1]);
        const index = words.indexOf(w);
        visited[index] = true;
      }
    }
  }

  return 0;
}
