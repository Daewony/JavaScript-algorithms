function solution(board) {
  //
  dx = [-1, 0, 1];
  dy = [-1, 0, 1];
  let bumb = [];
  for (let i = 0; i < board.length; i++) {
    bumb[i] = new Array(board[i].length).fill(0);
  }
  console.log(bumb);
  var answer = 0;
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === 1) {
        // if(i-1>=0 && i+1<=board.length && j-1 >=0 && j+1 <= board[i].length){
        bumb[i - 1][j - 1] = 1;
        bumb[i - 1][j] = 1;
        bumb[i - 1][j + 1] = 1;

        bumb[i][j - 1] = 1;
        bumb[i][j] = 1;
        bumb[i][j + 1] = 1;

        bumb[i + 1][j - 1] = 1;
        bumb[i + 1][j] = 1;
        bumb[i + 1][j + 1] = 1;
        // }

        // 테두리 처리필요
        // if()
        // board[i][j] = 1;
        // console.log(board)
        // for(let k=0;i<dy.length;k++){
        //     for(let l=0;l<dx.length;l++){
        //         x = j
        //         board[i+dy[k]][j+dx[l]] = 1;
        //     }
        // }
      }
    }
  }
  console.log(board);
  console.log(bumb);

  return answer;
}
