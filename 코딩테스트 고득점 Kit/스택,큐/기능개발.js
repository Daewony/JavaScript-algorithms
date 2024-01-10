/* 실패 코드 */

// 앞에꺼에서 100이 된건만 빼고 answer에 그 빠져나간 수를 저장하기
// 커서 위치도 있으면 될듯, cnt도 필요
// while 문을 이용해서 100인건만 빼고


function solution(progresses, speeds) {
    var answer = [];
    let cur = 0;
    let days = [];
    let cnt = 0;
    while(progresses.length > 0){
        if(progresses[cur]>=100){
            cur++;
            progresses.shift();
            days.push(cnt)
            cnt = 0;
        }
        progresses[cur]+=speeds[cur];
        cnt++;
    }
    console.log(days);
    
    
    return answer;
}

// 실패 원인: 뺀다는 생각보다 합쳐서 100만 넘으면 된다고 했는데 타임오버로 안됨
// -> 타임 오버가 일어난 이유는 ?
// 무한 루프에 빠짐

function solution(progresses, speeds) {
  const answer = []; // 결과를 저장할 배열

  let cur = 0; // 현재 작업 인덱스
  while (cur < progresses.length) {
    // 모든 작업이 배포될 때까지 반복
    let deployCount = 0; // 현재 배포일에 배포되는 작업의 개수 초기화
    let deployDay = Math.ceil((100 - progresses[cur]) / speeds[cur]); // 현재 작업의 배포일 계산

    // 현재 작업부터 순서대로 배포일에 배포되는 작업 수 계산
    while (
      cur < progresses.length &&
      progresses[cur] + speeds[cur] * deployDay >= 100
    ) {
      deployCount++; // 배포되는 작업 개수 증가
      cur++; // 다음 작업으로 이동
    }

    answer.push(deployCount); // 현재 배포일에 배포되는 작업 수를 결과 배열에 추가
  }

  return answer; // 최종적으로 각 배포일에 배포되는 작업 수를 담은 배열 반환
}