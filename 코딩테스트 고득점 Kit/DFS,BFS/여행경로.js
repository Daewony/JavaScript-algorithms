// 핵심 키워드: 모든 항공권을 한번씩 사용 -> 백트래킹 =되돌아올 준비
// - visited 배열 or 백트래킹 + 티켓 사용 체크
// 가능한 경로가 여러 개면 알파벳 순서 -> 알파벳 순서
// ✅ "ICN에서 출발", ✅ "경로를 배열로 리턴"
// - 뭔가 끝말잇기와 비슷함
// 알고리즘: 조건이 있는 DFS
// 자료구조: 출발지와 목적지를 큐를 통해 담으면 되지 않을까?(우선순위 큐면 더 좋을거같음-조건: 알파벳 순서)
// - 해당 티켓 사용했다고 방문 여부 배열 필요
// 목표: 주어진 항공권을 모두 이용하여 여행경로 구성
// - 가능한 경로 2개 이상일시 알파벳 순서로 앞서는 경로 반환
// - 출발지: ICN
// 실패 조건: 없음 -> 모든 도시 방문할 수 있다고 가정함
// 종료 조건: 항공권 모두 이용
// 시간복잡도: 10000*10000?

// 안풀리는 요인
// 1. visited를 어떻게 처리해야할지 감이 안잡힘
// 2. 알파벳 순서로 넣어야하는데,

// 잘못한점
// 1. for..of를 굳이 편하다는 이유로 고집부림 -> 인덱스값을 몰라 방문 추적하기 어려움

function solution(tickets) {
  const answer = [];
  const visited = new Array(tickets.length).fill(false);
  let result = [];

  // 알파벳 순서 정렬
  tickets.sort((a, b) => {
    if (a[0] === b[0]) return a[1].localeCompare(b[1]);
    return a[0].localeCompare(b[0]);
  });
  // Q.localCompare 없으면 못푸는 문제인건가?

  // 티켓으로 다양하게 갈 수 있는 경로의 경우의 수를 연결지어 노드와 간선 연결로 그림이 그려지면 DFS나 트리로 풀어야겠다는 힌트다 라고 생각하는데 맞나?
  function dfs(current, path) {
    // 티켓을 다 사용
    if (path.length === tickets.length + 1) {
      result = [...path];
      return true; // 탐색 중지 -> 왜?, 그냥 리턴하면 안되나?
    }

    for (let i = 0; i < tickets.length; i++) {
      const [from, to] = tickets[i];

      if (!visited[i] && from === current) {
        visited[i] = true;
        if (dfs(to, [...path, to])) return true;
        visited[i] = false; // 백트래킹, 백트래킹이 뭐지?
      }
    }
    return false;
  }

  dfs("ICN", ["ICN"]);
  return result;

  // DFS는 스택이 아니라 보통 재귀로 하는 이유가 있을까? 재귀가 곧 스택이지만..
  // 시작점
  //     answer.push("ICN");
  //     function dfs(s) {
  //         console.log(s)

  //         // 종료 조건
  //         if(answer.length === tickets.length + 1) {
  //             return answer;
  //         }
  //         // let dest = [];

  //          // 반복문을 통해 해당 출발지를 가진 목적지를 찾기
  //         for(let i=0;i<tickets.length;i++){
  //             const [from, to] = tickets[i];
  //             if(from === s && !visited[i]) {
  //                 visited[i] = true;
  //                 answer.push(to);

  //                 dfs(to);

  //                 // 종료되지 않으면 백트래킹
  //                 visited[i] = false;
  //                 answer.pop();
  //             }
  //         }
  //         for(const [a,b] of tickets) {
  //             // console.log(a,b)
  //             // 출발지 같음
  //             if(answer[answer.length-1] === a) {
  //                 // 도착지 알파벳 순서로 넣기 -> 막힘, 새로운 배열을 만들어서 정렬을 해서 첫번째있는 것을 push하게 할까?

  //                 dest.push(b)

  //                 // answer.push(b);
  //                 // visited

  //             }
  //         }
  // dest.sort();
  // console.log(dest); // 해당 인덱스에 방문했다고 하고 싶은데..

  // dfs(dest[0]);
  // }
  // dfs("ICN");

  // return answer;
}

// 주어진 항공권을 모두 이용
// - 백트레킹, 경로 하나 보고 되돌아올 준비 해야함,
// - 방문

// 가능한 경로가 여러개 -> 알파벳 순서
// - 정렬을 미리 해놓자
// - 출발지가 같고, 목적지가 여러개일때 담아서 그때 정렬해놓자

// ICN 출발

// 경로를 배열로 반환

function solution2(tickets) {
  // 경로
  const routes = [];

  // 방문 여부
  const visited = new Array(tickets.length).fill(false);

  // 미리 정렬
  tickets.sort((a, b) => {
    // 출발지가 같음 -> 목적지의 알파벳 순서로 정렬
    if (a[0] === b[0]) return a[1] < b[1] ? -1 : 1; // 음수면 앞에 감, 즉 작은 값은 앞에감
    return a[0] < b[0] ? -1 : 1;
    // 출발지가 다르다 -> 출발지의 알파벳 순서로 정렬
  });

  // dfs(출발지, 경로)
  // 1. 미리 정렬했을 경우
  function dfs(current, path) {
    // 성공 조건

    if (path.length === tickets.length + 1) {
      routes = [...path];
      return true;
    }
    for (let i = 0; i < tickets.length; i++) {
      const [from, to] = tickets[i];
      if (current === from && !visited[i]) {
        visited[i] = true;
        dfs(to, [...path, to]);
        visited[i] = false;
      }
    }

    return false;
  }

  //
  dfs("ICN", ["ICN"]);

  return routes;
}
