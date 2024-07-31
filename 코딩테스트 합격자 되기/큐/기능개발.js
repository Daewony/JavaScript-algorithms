function solution(progresses, speeds) {
  const answer = [];
  const n = progresses.length;
  // 각 작업의 배포 가능일 계산
  const daysLeft = progresses.map((progress, index) =>
    Math.ceil((100 - progress) / speeds[index])
  );

  let count = 0; // 배포될 작업의 수 카운트
  let maxDay = daysLeft[0]; // 현재 배포될 작업 중 가장 늦게 배포될 작업의 가능일

  for (let i = 0; i < n; i++) {
    if (daysLeft[i] <= maxDay) {
      // 배포 가능일이 가장 늦은 배포일보다 빠르면
      count++;
    } else {
      // 배포 예정일이 기준 배포일보다 느리면
      answer.push(count);
      count = 1;
      maxDay = daysLeft[i];
    }
  }
  answer.push(count); // 마지막으로 카운트된 작업들을 함께 배포
  return answer;
}

// 앞에가 기능이 완성이 되어야 차례로 나감 -> 큐를 사용해라 -> 제거하는 방법과 아니면 100에서 멈추는 방법이 있음 -> 반복문에 제거해서 위치 이상한것보단 100으로 하는것이 나아보임
// 큐로 몇번 만족했는가?를 숫자로 answer에 값을 추가하자

function solution(progresses, speeds) {
  var answer = [];
  let sum = progresses.reduce((a, b) => a + b);
  let p = 0;

  // 각 progresses 랑 각 speeds 더하기
  // 언제까지? 모름, 해당조건에 만족할때까지 -> while문 활용
  while (sum < progresses.length * 100) {
    // 작업 계산하기
    for (let i = 0; i < progresses.length; i++) {
      progresses[i] += speeds[i];
      if (progresses[i] > 100) progresses[i] = 100;
    }
    let cnt = 0;
    // 작업 100이면 넣기
    while (progresses[p] === 100) {
      cnt++;
      p++;
    }
    if (cnt) answer.push(cnt);

    sum = progresses.reduce((a, b) => a + b);
  }

  return answer;
}

// ---------------------이전 풀이------------------

// 배열에 각 배포마다 몇 개의 기능이 배포되는지 cnt를 하거나 앞에서 100을 찍으면 이중 포인터로 100이 아닐때 까지 cnt를 세는 방법이 있음
// 앞에것이 100이 될때까지 반복하기

// 업그레이드 해서 몇일날에 몇개의 기능이 업데이트 되는지 출력해주는 것도 좋을듯

function solution(progresses, speeds) {
  var answer = [];

  // 언제 끝날지 모르는 상황 -> while 문 활용
  // 끝나는 조건은 pro 배열이 빈배열이 아닐때 까지 -> 길이가 0이 아닐때 까지 진행

  while (progresses.length !== 0) {
    let cnt = 0;
    if (progresses[cnt] === 100) {
      cnt++;
      while (progresses[cnt] === 100) {
        cnt++;
      }
      answer.push(cnt);
      for (let i = 0; i < cnt; i++) {
        progresses.shift();
      }
    }

    // 더하기
    for (let i = 0; i < progresses.length; i++) {
      progresses[i] += speeds[i];
      if (progresses[i] > 100) progresses[i] = 100;
    }
  }

  return answer;
}
