function solution(keyinput, board) {
  var answer = [0, 0];
  let map = [(board[0] - 1) / 2, (board[1] - 1) / 2];

  keyinput.forEach((i) => {
    switch (i) {
      case "up":
        if (Math.abs(answer[1] + 1) <= map[1]) answer[1] += 1;
        break;
      case "down":
        if (Math.abs(answer[1] - 1) <= map[1]) answer[1] -= 1;
        break;
      case "right":
        if (Math.abs(answer[0] + 1) <= map[0]) answer[0] += 1;
        break;
      case "left":
        if (Math.abs(answer[0] - 1) <= map[0]) answer[0] -= 1;
        break;
    }
  });

  return answer;
}
