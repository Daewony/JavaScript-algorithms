// 로봇 청소기가 주어진 방향 명령에 따라 움직인다.
// 맵은 N x M 격자이고, 벽(1)과 빈 공간(0)으로 이루어져 있다.
// 로봇은 시작 위치에서 방향대로 이동하며, 벽을 만나면 멈춘다.
// 방향은 'U', 'D', 'L', 'R'로 주어진다.
// 최종 위치를 반환하라.

const map = [
  [0, 0, 0, 1],
  [0, 1, 0, 0],
  [0, 0, 0, 0],
];
const start = [0, 0];
const commands = "RRDDLL";

function solution(start, commands) {
  let [y, x] = start;
  const max_x = map[0].length;
  const max_y = map.length;
  console.log(max_x, max_y);
  // commands를 하나씩 명령시켜서 이동시킴
  // 이동하기 전에 이동이 가능한지 확인, 불가능하면 그냥 가만히 있기
  for (const c of commands) {
    switch (c) {
      case "U":
        if (y > 0 && map[y - 1][x] === 0) y--;
        break;
      case "D":
        if (y < max_y && map[y + 1][x] === 0) y++;
        break;
      case "L":
        if (x > 0 && map[y][x - 1] === 0) x--;
        break;
      case "R":
        if (x < max_x && map[y][x + 1] === 0) x++;
        break;
    }
  }

  return [y, x];
}

console.log(solution(start, commands));

// → 결과: [2, 0]
