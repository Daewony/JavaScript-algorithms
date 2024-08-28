/* 1번째 풀이 (실패)
- 1백만 정도의 길이는 logN정도로 푸는게 좋다고 생각하기 
- 문제방식이 가장 작은 것을 뽑아서 계산하는 방식이므로 힙을 사용해야함 -> 힙에 대한 개념의 부족으로 정렬로 풀었음
- 정렬은 O(NlogN)이므로 시간초과 발생함
*/

// 모든 음식 중에서 스코빌 지수가 가장 낮은 2개 뽑기
// 새로운 스코빌 지수 계산하기
// 계산한 값 배열에 넣기
// 현재 배열에서 가장 작은 값이 K를 넘는지 보기
// 넘었다 =>  answer값 리턴
// 안넘었다 => 위 1단계부터 다시 반복
// 계속 안넘을 경우도 생각해야함

function solution(scoville, K) {
  var answer = 0;

  // 모든 음식 중에서 스코빌 지수가 가장 낮은 2개 뽑기
  scoville.sort((a, b) => a - b);
  let min1 = scoville.shift();
  let min2 = scoville.shift();

  // 새로운 스코빌 지수 계산하기
  let mix = min1 + min2 * 2;
  answer++;

  // 계산한 값 배열에 넣기
  scoville.unshift(mix);

  // 현재 배열에서 가장 작은 값이 K를 넘는지 보기
  scoville.sort((a, b) => a - b);
  while (scoville[0] < K && scoville.length !== 1) {
    min1 = scoville.shift();
    min2 = scoville.shift();

    mix = min1 + min2 * 2;
    answer++;

    scoville.unshift(mix);
    scoville.sort((a, b) => a - b);
  }

  return answer;
}
