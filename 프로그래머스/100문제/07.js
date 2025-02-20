// 좌표평면이 겹치는데 이걸 다르게 처리하는 방법을 모르겠음
// 이동 경로를 저장해야하는데 어떻게 해야하지?

// 이동 가능한 좌표평면
function isValidMove(nx, ny) {
  return nx <= 5 && nx >= -5 && ny <= 5 && ny >= -5;
}

// 이동 배열
function updateLocation(x, y, dir) {
  switch (dir) {
    case "U":
      return [x, y + 1];
    case "D":
      return [x, y - 1];
    case "R":
      return [x + 1, y];
    case "L":
      return [x - 1, y];
  }
}

function solution(dirs) {
  let x = 0;
  let y = 0;

  const visited = new Set(); // 겹치는 좌표는 1개로 처리하기 위함 ->
  for (const dir of dirs) {
    let [nx, ny] = updateLocation(x, y, dir);
    // 이동 범위를 못넘김
    if (!isValidMove(nx, ny)) {
      continue;
    }

    visited.add(`${x}${y}${nx}${ny}`); // 고유한 이동 경로를 위함 (0,0 -> 0,1) = (0,1 -> 0,0)
    visited.add(`${nx}${ny}${x}${y}`); // 반대방향
    // 이동한 좌표 저장
    [x, y] = [nx, ny];
  }

  return visited.size / 2;
}

console.log(solution("ULURRDLLU"));
