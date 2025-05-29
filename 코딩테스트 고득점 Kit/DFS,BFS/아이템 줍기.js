// 핵심 키워드 및 요구: 가장 바깥쪽 테두리가 캐릭터의 이동경로, 캐릭터가 아이템을 줍기 위해 이동해야하는 가장 짧은 거리
// 유형 분류: 짧은 거리 문제
// 알고리즘: BFS
// 자료구조: 큐, 방문 배열
// 종료조건: 목표지점 도달, 목표 도달 실패의 경우는 없나봄
// 시간복잡도: 캐릭터의 x위치*y위치, 아이템의 x위치 * y위치
// 50*50*50*50

// 가장 외각에 있는 것을 기준으로 이동 -> 상하좌우에 0이 있음 -> 없는 경우도 있잖아 -> 겹침 부위를 찾기 -> 1->2로 업글
// 왼쪽만 0임 -> 위, 아래 이동가능
// 위,왼쪽 0임 -> 오른쪽, 아래 이동 가능
// 위만 0임 -> 왼쪽, 오른쪽 이동 가능
// 아래
// 이게 한칸 띄어서 생각하면 안되겠네, 아래방향으로는 안갔는데, 한칸 띄어서 아래에 있는 점은 지나갔다고 표시하여 아래로 이동했다고 착각할 수 있음
// 결국 한 점에서 어디를 이동했냐 2가지를 저장해야할거같은데?
// 2라면 1이 있는쪽으로 이동하기
// 핵심은 어디에 직사각형이 있는가? 가장 바깥의 테두리 인가? 이미 지나갔는가?
//

// 직사각형 담긴 정보 / 초기 캐릭터 위치 정보 / 아이템 위치 정보

class Queue {
  items = [];
  front = 0;
  rear = 0;

  push(item) {
    this.items.push(item);
    this.rear++;
  }

  pop() {
    return this.items[this.front++];
  }

  get length() {
    return this.rear - this.front;
  }
}

const dx = [0, 1, 0, -1];
const dy = [1, 0, -1, 0];

function solution(rectangle, characterX, characterY, itemX, itemY) {
  // 맵의 최대 크기
  // const size = 50
  const SIZE = 102; // 죄표 1~50 이상이라는 조건

  // 맵 설정
  const map = Array.from({ length: SIZE }, () => new Array(SIZE).fill(0));

  // 방문 배열
  const visited = Array.from({ length: SIZE }, () =>
    new Array(SIZE).fill(false)
  );

  // 스케일링(대각선 처리 방지)
  rectangle = rectangle.map((r) => r.map((v) => v * 2));
  characterX *= 2;
  characterY *= 2;
  itemX *= 2;
  itemY *= 2;
  visited[characterY][characterX] = true;

  // console.log(map)

  // 직사각형의 정보를 바탕으로 맵 설정 추가
  // 1. 전체 사각형 내부를 먼저 1로 칠함
  for (const [x1, y1, x2, y2] of rectangle) {
    for (let i = x1; i <= x2; i++) {
      for (let j = y1; j <= y2; j++) {
        map[j][i] = 1;
      }
    }
  }

  // 2. 내부는 0으로 지워서 테두리만 남김
  for (const [x1, y1, x2, y2] of rectangle) {
    for (let i = x1 + 1; i < x2; i++) {
      for (let j = y1 + 1; j < y2; j++) {
        map[j][i] = 0;
      }
    }
  }

  // 큐, 시작점 넣기, 얼마나 이동했는지
  const q = new Queue();
  let move = 0;
  q.push([characterX, characterY, move]);

  // BFS
  while (q.length > 0) {
    const [x, y, dist] = q.pop();
    // 종료 조건
    if (x === itemX && y === itemY) {
      return dist / 2;
    }

    // 이동 조건
    for (let i = 0; i < 4; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];

      // 가장 바깥쪽 테두리가 캐릭터의 이동
      if (
        nx >= 0 &&
        ny >= 0 &&
        nx < SIZE &&
        ny < SIZE &&
        !visited[ny][nx] &&
        map[ny][nx] === 1
      ) {
        visited[ny][nx] = true;
        q.push([nx, ny, dist + 1]);
      }
    }
  }

  return 0;
}
