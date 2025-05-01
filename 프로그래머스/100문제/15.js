class Queue {
  items = [];
  front = 0;
  rear = 0;

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

function solution(N, K) {
  const queue = new Queue();

  // 1~N까지의 번호를 deque에 추가
  for (let i = 1; i <= N; i++) {
    queue.push(i);
  }
  console.log(queue);

  while (queue.size() > 1) {
    for (let i = 0; i < K - 1; i++) {
      queue.push(queue.pop()); // K번째 요소를 찾기 위함
      console.log(queue, queue.size());
    }
    queue.pop();
  }

  return queue.pop();
}

console.log(solution(5, 2));
