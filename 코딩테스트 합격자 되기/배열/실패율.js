function solution(N, stages) {
  var answer = [];
  var failureRates = [];

  // 반복문으로 스테이지 넘기기 -> 확률 저장하기
  stages = stages.sort((a, b) => a - b);
  for (let i = 0; i < N; i++) {
    let total = stages.length;
    let res = 0;
    let nc = 0;
    for (let j = 0; j < stages.length; j++) {
      if (stages[j] < i + 1) total--;
      if (stages[j] === i + 1) nc++;
    }
    // res = nc/total;
    res = total === 0 ? 0 : nc / total;
    failureRates.push({ stage: i + 1, rate: res });
    // console.log(res)
    //
  }

  // 소수로 나눗셈 나타내기
  //
  // 스테이지를 정렬해서 -> 차례대로 shift하면서 확률구하고 거 -> 반복문에 문제생김
  failureRates.sort((a, b) => {
    if (b.rate === a.rate) {
      return a.stage - b.stage;
    }
    return b.rate - a.rate;
  });

  // 정렬된 순서대로 스테이지 번호 저장
  for (let i = 0; i < failureRates.length; i++) {
    answer.push(failureRates[i].stage);
  }

  // 내림차순 스테이지 번호 반환 -> 정렬 활용
  return answer;
}
