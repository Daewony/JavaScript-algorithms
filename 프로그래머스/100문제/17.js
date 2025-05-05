// 카드 2개 뭉치 -> 맨 앞에 있는 순서로 빼내서 결과를 확인할 수 있음
// => 큐 사용
// 카드1, 카드2를 확인하고 goal에 있는 것과 같은지 확인
// 카드1이 같다면 카드1을 deque(맨앞에 빼고)를 함
// 카드2도 동일
// goal도 queue 로 제거
// 만약 카드1, 카드2도 동일하지 않다면 바로 "No" 반환

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

  size() {
    return this.rear - this.front;
  }

  first() {
    return this.items[this.front];
  }
}

function solution(cards1, cards2, goal) {
  const q1 = new Queue();
  const q2 = new Queue();
  const g = new Queue();

  for (let card of cards1) {
    q1.push(card);
  }

  for (let card of cards2) {
    q2.push(card);
  }

  for (let card of goal) {
    g.push(card);
  }

  for (let word of goal) {
    if (word === q1.first()) {
      q1.pop();
      g.pop();
      continue;
    }

    if (word === q2.first()) {
      q2.pop();
      g.pop();
      continue;
    }

    return "No";
  }

  return g.size() === 0 ? "Yes" : "No";
}
