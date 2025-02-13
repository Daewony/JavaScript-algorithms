// 실패율 구하기
// 실패율 = 스테이지에 도달했으나 아직 클리어하지 못한 플레이어의 수 / 스테이지에 도달한 플레이어 수
// 스테이지의 개수 N
// 게임을 이용하는 사용자가 현재 멈춰있는 스테이지의 번호가 담긴 배열 stages
// 실패율이 높은 스테이지부터 내림차순으로 스테이지의 번호가 담겨있는 배열을 return
//  N + 1 은 마지막 스테이지(N 번째 스테이지) 까지 클리어 한 사용자
// 2 -> 1 스테이지는 통과했지만 현재 2스테이지인 상태임

// 정렬하고싶다는 생각이 듬 -> 굳이 필요없어보임
// [2, 1, 2, 6, 2, 4, 3, 3] -> 	[1, 2, 2, 2, 3, 3, 4, 6]
// 반복문으로 1~N까지 돌리기
// 반복문 0~stages.length까지 돌려서 파악하기
// 해당 반복문 i가 각 사용자의 스테이지보다 크고 같은것은, 스테이지에 도달한 플레이어 수: t 로 설정
// 스테이지에 도달했으나 아직 클리어하지 못한 플레이어의 수: nc 로 설정
// 새로운 배열은 스테이지별로 실패율을 넣기[]
// 다른 새로운 배열에서는 실패율을 보고 실패율 순서에 맞게 스테이지 번호를 하나씩 넣기

// 실패율 순서에 맞게 넣는 것을 못함

function solution(N, stages) {
  let fail = []; // 실패율
  let answer = [];

  // 반복문으로 1~N까지 돌리기
  for (let i = 1; i <= N; i++) {
    // 반복문 0~stages.length까지 돌려서 파악하기
    let t = 0;
    let nc = 0;
    for (let j = 0; j <= stages.length; j++) {
      // 해당 반복문 i보다 크고 같은것은, 스테이지에 도달한 플레이어 수: t 로 설정 -> 미흡함
      // 해당 반복문 i가 각 사용자의 스테이지보다 크고 같은것은, 스테이지에 도달한 플레이어 수: t 로 설정
      if (i <= stages[j]) t++;
      // 스테이지에 도달했으나 아직 클리어하지 못한 플레이어의 수: nc 로 설정 -> 미흡
      // 스테이지에 도달했으나 아직 클리어하지 못한 플레이어의 수: nc 로 설정
      // nc = 스테이지 숫자와 같아야함
      if (i === stages[j]) {
        nc++;
      }
    }
    // console.log(nc,t)
    fail.push(nc / t);
  }
  console.log(fail);

  // 실패율 큰 순서대로, 해당 인덱스 + 1 넣기
  // 1. 매번 Max값을 구해서 비교 해서 넣는 방법
  // 2. 객체로 해서, 값을 통해 정렬을 하고 해당 키값을 배열에 담기 -> 할줄 모름

  // 1번 방법
  // while(fail.length>1){
  //     let max = Math.max(...fail);
  //     let idx = fail.findIndex((e)=>e===max);
  //     console.log('max',max,'idx',idx)
  //     answer.push(idx);
  //     fail.splice(idx,1); // 사라지면 안되겠네 -> idx위치가 사라짐
  // }

  // 최솟값이 안됨
  // for(let i=1;i<=N;i++){
  //     let max = Math.max(...fail);
  //     let idx = fail.findIndex((e)=>e===max);
  //     console.log('idx+1',idx+1)
  //     answer.push(idx+1);
  //     fail[idx]=0;
  //     console.log(fail)
  // }

  // const fails = {
  //     0 : ar
  // }

  return answer;
}

function solution(N, stages) {
  const stageRates = [];

  for (let stage = 1; stage <= N; stage++) {
    // 해당 스테이지에 도달한 플레이어 수
    const reached = stages.filter((s) => s >= stage).length;
    // 해당 스테이지에서 아직 클리어하지 못한 플레이어 수
    const notCleared = stages.filter((s) => s === stage).length;

    const rate = reached === 0 ? 0 : notCleared / reached;
    stageRates.push({ stage, rate });
  }

  // 실패율 내림차순, 실패율이 같다면 스테이지 번호가 낮은 순으로 정렬
  stageRates.sort((a, b) => b.rate - a.rate || a.stage - b.stage);

  return stageRates.map((item) => item.stage);
}
