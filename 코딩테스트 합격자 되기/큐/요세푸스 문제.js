// splice로 푸는 방법
function solution(N = 5, K = 2) {
  let arr = new Array(N).fill(0).map((_, i) => i + 1);
  let p = 0;
  while (arr.length > 1) {
    p += K - 1;
    if (p >= arr.length) p -= arr.length;
    arr.splice(p, 1);
  }
  console.log(arr[0]);
  return arr[0];
}

// solution(5, 2);

// 큐로 푸는 방법

class Queue {
  items = [];
  front = 0;
  rear = 0;

  push(item) {
    this.items.push(item);
    this.rear++;
  }

  // 큐의 크기.
  size() {
    return this.rear - this.front;
  }

  pop() {
    return this.items[this.front++];
  }
}

function solution2(N, K) {
  const queue = new Queue();

  // 1부터 N까지의 번호를 deque에 추가
  for (let i = 1; i <= N; i++) {
    queue.push(i);
  }

  while (queue.size() > 1) {
    // deque에 하나의 요소가 남을 때까지
    for (let i = 0; i < K - 1; i++) {
      queue.push(queue.pop()); // k 번째 요소를 찾기 위해
      // 앞에서부터 제거하고 뒤에 추가
    }

    queue.pop(); // k번째 요소 제거
  }

  return queue.pop(); // 마지막으로 남은 요소 반환
}

console.log(solution2(5, 2));
