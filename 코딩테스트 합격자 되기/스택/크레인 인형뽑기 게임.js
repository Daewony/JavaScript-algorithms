function solution(board, moves) {
  let l = [];
  let stack = [];
  let answer = 0;

  // 각 열에 대해 인형을 아래에서부터 위로 쌓아 두기
  for (let i = 0; i < board.length; i++) {
    l[i] = [];
    for (let j = board.length - 1; j >= 0; j--) {
      if (board[j][i] !== 0) {
        l[i].push(board[j][i]);
      }
    }
  }

  // moves 배열을 통해 인형 뽑기 및 처리
  for (let move of moves) {
    let column = move - 1;
    let n = l[column].pop();

    if (n !== undefined) {
      if (stack[stack.length - 1] === n) {
        stack.pop();
        answer += 2;
      } else {
        stack.push(n);
      }
    }
  }

  return answer;
}
