function solution(board, k) {
  let answer = 0;
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (i + j <= k) {
        answer += board[i][j];
      }
    }
  }
  return answer;
}

// 다른 사람의 풀이
function solution(board, k) {
  return board.reduce(
    (sum, row, i) =>
      sum +
      row.reduce((rowSum, value, j) => rowSum + (i + j <= k ? value : 0), 0),
    0
  );
}
