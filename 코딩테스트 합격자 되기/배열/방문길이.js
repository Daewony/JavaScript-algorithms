// 2번째 풀이(테스트는 통과) -> x-1, y-1>=1 범위를 잘못 설정함
// -5~5이면 총 11개 숫자로 0을 포함해야하는데 그러면 나는 0,0~10,10으로 설정해야함
// 그러나 나는 1,1~10,10으로 설정해서 범위를 설정해서 틀림
function solution(dirs) {
  let distance = 0;
  // 10 x 10 공간 설정 (0은 사용안할 것임)
  let map = Array.from({ length: 11 }, () =>
    Array.from({ length: 11 }, () => ({
      U: false,
      R: false,
      L: false,
      D: false,
    }))
  );
  // x,y 위치
  let x = 5;
  let y = 5;

  for (let dir of dirs) {
    switch (dir) {
      case "U":
        // 맵 범위 안에 있는 곳인가?
        if (y + 1 <= 10) {
          // 처음 걸어본 길인가?
          if (map[x][y].U === false) {
            map[x][y].U = true;
            distance++;
          }

          // 이동
          y++;
          // 이동하고 아래방향도 지나간길이 됨
          map[x][y].D = true;
        }
        break;
      case "R":
        // 맵 범위 안에 있는 곳인가?
        if (x + 1 <= 10) {
          // 처음 걸어본 길인가?
          if (map[x][y].R === false) {
            map[x][y].R = true;
            distance++;
          }

          // 이동
          x++;
          map[x][y].L = true;
        }

        break;
      case "D":
        // 맵 범위 안에 있는 곳인가?
        // if (y - 1 >= 1) {
        if (y - 1 >= 0) {
          // 처음 걸어본 길인가?
          if (map[x][y].D === false) {
            map[x][y].D = true;
            distance++;
          }

          // 이동
          y--;
          map[x][y].U = true;
        }

        break;
      case "L":
        // 맵 범위 안에 있는 곳인가?
        // if (x - 1 >= 1) {
        if (x - 1 >= 0) {
          // 처음 걸어본 길인가?
          if (map[x][y].L === false) {
            map[x][y].L = true;
            distance++;
          }

          // 이동
          x--;
          map[x][y].R = true;
        }
        break;
      default:
        break;
    }
    console.log(x, y, distance);
  }

  return distance;
}

// 1번째 풀이

function solution(dirs) {
  var answer = 0;

  let map = new Array(10).fill().map(() => new Array(10).fill(0));
  // (0,0) <=> (5,5) 로 풀기
  let px = 5;
  let py = 5;
  // map[px][py]=1;

  // 방향 패턴
  dirs = dirs.split("");

  // 걸어본 길로 계산해야함 -> 5,5 로 돌아왔다고할때 1,0 0,1 등 여러가지 방법으로 인해 같은 공간에 돌아갈 수 있는데 한 개로 치부하면 망함
  // 사람이라면 갔던 길을 색칠함 ->

  for (let dir of dirs) {
    switch (dir) {
      case "U":
        if (py < 10) py++;
        map[px][py] = 1;
        break;
      case "D":
        if (py > 0) py--;
        map[px][py] = 1;
        break;
      case "R":
        if (px < 10) px++;
        map[px][py] = 1;
        break;
      case "L":
        if (px > 0) px--;
        map[px][py] = 1;
        break;
    }
  }
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      if (map[i][j] === 1) answer++;
    }
  }

  console.log(map);

  return answer;
}

// 3번째 풀이(GPT)

function solution(dirs) {
  let visited = new Set();
  let x = 0,
    y = 0;
  let distance = 9;

  const moves = {
    U: [0, 1],
    D: [0, -1],
    R: [1, 0],
    L: [-1, 0],
  };

  for (let dir of dirs) {
    let [dx, dy] = moves[dir];
    let nx = x + dx;
    let ny = y + dy;

    if (nx >= -5 && nx <= 5 && ny >= -5 && ny <= 5) {
      let path1 = `${x},${y},${nx},${ny}`;
      let path2 = `${nx},${ny},${x},${y}`;
      console.log(path1, path2);

      if (!visited.has(path1) && !visited.has(path2)) {
        visited.add(path1);
        visited.add(path2);
        distance++;
      }

      x = nx;
      y = ny;
    }
  }

  return distance;
}
