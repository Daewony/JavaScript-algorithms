// 몇일째에 몇개의 기능이 배포되는지 확장해서 풀어보기 -> 객체로 가능함

// 반복문을 통해 더한 다음에 맨 앞에 있는 배열이 100이면 그때 길이를 구하고 answer에 push하면 될거 같음
// 스택/큐 문제라면 어떻게 해서 풀었을까?

function solution(progresses, speeds) {
  let func = 0;
  const deploy = {};
  // deploy.keys(0);
  // deploy.values(1);
  // console.log(deploy)
  // 객체에서 키 값을 바로 넣는 방법이 어떻게 되지?
  const days = [];

  var answer = [];

  const pull = 100;

  // 길이만큼의 총합을 달성하지 않으면 시뮬레이션 돌리기, 매 루프 마다 계산함
  while (
    progresses.reduce((acc, cur) => acc + cur, 0) <
    progresses.length * pull
  ) {
    for (let i = 0; i < progresses.length; i++) {
      progresses[i] += speeds[i];
      if (progresses[i] > 100) progresses[i] = 100;

      if (progresses[func] === 100) {
        let fl = 0;
        while (progresses[func] === 100) {
          fl++;
          func++;
        }
        answer.push(fl);
      }
    }
  }

  return answer;
}

// 내 코드의 단점 일일이 시뮬레이션을 돌림
// 총합의 길이만큼 시뮬레이션을 돌리고 업데이트 하여, 배열의 맨 앞이 100이면 그때 조건식으로 처리하는 형태로 생각함

function solution2(progresses, speeds) {
  const answer = [];
  const days = progresses.map((p, i) => Math.ceil((100 - p) / speeds[i]));
  console.log(days);

  let maxDay = days[0];
  let count = 1;

  for (let i = 1; i < days.length; i++) {
    console.log(days[i]);
    if (days[i] <= maxDay) {
      count++;
    } else {
      answer.push(count);
      count = 1;
      maxDay = days[i];
    }
  }

  answer.push(count);
  return answer;
}

console.log(solution2([93, 30, 55], [1, 30, 5]));
