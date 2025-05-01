class Queue {
  items = [];
  rear = 0;
  front = 0;

  push(item) {
    this.items.push(item);
    this.rear++;
  }

  size() {
    return this.rear - this.front;
  }

  pop() {
    return this.items[this.front++];
  }
}

// K번째마다 제거된 사람의 번호 순서 (배열)

function solution(N, K) {
  // 큐로 하는 이유가 뭘까?
  // 특정 순서마다 제거
  const queue = new Queue();
  const arr = [];

  // 1~N까지 입력
  for (let i = 1; i <= N; i++) {
    queue.push(i);
  }

  while (queue.size() > 0) {
    // K번째가 아닌 것은 push하기
    for (let i = 0; i < K - 1; i++) {
      queue.push(queue.pop());
    }
    // K번째 인것을 배열에 push하고 pop 하기
    arr.push(queue.pop());
  }

  return arr;
}

console.log(solution(7, 3)); // [3, 6, 2, 7, 5, 1, 4]
