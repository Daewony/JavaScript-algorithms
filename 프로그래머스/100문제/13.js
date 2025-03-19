// 스택 담는 공간
// 제한 사항을 읽지 않음 -> 시간 낭비

// board "5 x 5" 이상 "30 x 30" 이하
// moves 1 이상이며 board 배열의 가로 크기 이하

function solution(board, moves) {
  let answer = 0;

  // 옮겨서 담는 공간
  const arr = [];
  const size = board.length;

  // moves 배열에 하나씩 꺼내서 board[i][move-1] 로 => 뒤집어서 생각함
  // 1. 0이 아닌 숫자를 만난다 -> arr.push하기 -> board[i][move-1] = 0 으로 하기
  // 2. 계속 0이면 무시한다
  // 끝난후, arr 길이 2이상이면 최근 쌓은 2개를 비교한다
  // 1. 같으면 answer 를 2 증가한다
  // 2. 다르면 무시한다
  console.log(moves);

  moves.forEach((v) => {
    // y축의 위에서 부터 아래로 크레인이 내리기 때문 -> 맞는데 배열이 반대로 됨
    // 이미 x 축의 정도는 v를 통해 앎
    for (let i = 0; i < size; i++) {
      if (board[i][v - 1] > 0) {
        arr.push(board[i][v - 1]);
        board[i][v - 1] = 0;
        break;
      }
    }

    if (arr.length >= 2 && arr[arr.length - 1] === arr[arr.length - 2]) {
      answer += 2;
      arr.pop();
      arr.pop();
    }
  });

  return answer;
}

// 스택 담는 공간
// 제한 사항을 읽지 않음 -> 시간 낭비

function solution(board, moves) {
  let answer = 0;

  // 옮겨서 담는 공간
  const arr = [];

  // 0,0 / 1,0 / 2,0 / 3,0 / 4,0

  const r1 = [];
  const r2 = [];
  const r3 = [];
  const r4 = [];
  const r5 = [];
  // 5x5 => 5개의 스택을 만드는 방법 -> 이미 보드로 담아져있으니 불필요한 작업인거같음
  for (let j = 0; j <= 5; j++) {
    for (let i = 4; i >= 0; i--) {
      const b = board[i][j];
      if (b > 0 && j === 0) r1.push(b);
      if (b > 0 && j === 1) r2.push(b);
      if (b > 0 && j === 2) r3.push(b);
      if (b > 0 && j === 3) r4.push(b);
      if (b > 0 && j === 4) r5.push(b);
    }
  }

  console.log(r1);
  console.log(r2);
  console.log(r3);
  console.log(r4);
  console.log(r5);

  // 하나씩 반복문을 통해서 확인하고 꺼내는 방법

  // moves 만큼 작업하기 -> 해당 '열' 이 0이 아닌지 확인해야함

  moves.forEach((m) => {
    if (m === 1 && r1.length > 0) arr.push(r1.pop());
    if (m === 2 && r2.length > 0) arr.push(r2.pop());
    if (m === 3 && r3.length > 0) arr.push(r3.pop());
    if (m === 4 && r4.length > 0) arr.push(r4.pop());
    if (m === 5 && r5.length > 0) arr.push(r5.pop());
    if (arr.length >= 2 && arr[arr.length - 2] === arr[arr.length - 1]) {
      answer += 2;
      arr.pop();
      arr.pop();
    }
  });

  return answer;
}
