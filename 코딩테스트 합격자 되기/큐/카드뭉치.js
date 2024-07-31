// 어느 카드 뭉치를 사용하든 상관없지만 사용한다면 순서대로 사용해야하는 룰이다
// goal에 도달하는지 안하는지 Yes No로 대답하기
function solution(cards1, cards2, goal) {
  // 순서대로 -> 앞에서부터 사용해야함 -> 큐를 활용해보자
  // goal의 첫번째를 보고 card1, card2에 맨앞에 존재하는지 확인하고 없으면 No를 리턴하기

  // goal 반복문 돌리기
  for (let i of goal) {
    // card1 맨앞에 있다면 없애고 continue 하기
    if (i === cards1[0]) {
      cards1.shift();
      // continue;
    }
    // card2 맨앞에 있다면 없애고 continue 하기
    else if (i === cards2[0]) {
      cards2.shift();
      // continue;
    } else {
      return "No";
    }
  }

  return "Yes"; // Yes, No
}

// -----------------------책 답

class Queue {
  items = [];
  front = 0;
  rear = 0;

  // 생성자 초기화
  constructor(array) {
    this.items = array;
    this.rear = array.length;
  }

  push(item) {
    this.items.push(item);
    this.rear++;
  }

  pop() {
    return this.items[this.front++];
  }

  first() {
    return this.items[this.front];
  }

  isEmpty() {
    return this.front === this.rear;
  }
}

function solution(cards1, cards2, goal) {
  // cards와 goal을 Queue로 변환
  cards1 = new Queue(cards1);
  cards2 = new Queue(cards2);
  goal = new Queue(goal);

  // goal의 문자열을 순차적으로 순회
  while (!goal.isEmpty()) {
    // card1의 front와 일치하는 경우
    if (!cards1.isEmpty() && cards1.first() === goal.first()) {
      cards1.pop();
      goal.pop();
    }
    // card2의 front와 일치하는 경우
    else if (!cards1.isEmpty() && cards1.first() === goal.first()) {
      cards1.pop();
      goal.pop();
    } else {
      break;
    }
  }

  return goal.isEmpty() ? "Yes" : "No";
}
