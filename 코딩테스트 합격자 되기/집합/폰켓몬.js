// 조합 문제
// 가장 많은 종류의 폰켓몬을 선택하는 개수 구하기
// => 가장 많은 종류의 개수 구하기
// 1. 중복 없애기
// 2. 최대로 가장 많은 종류의 개수는 N/2
// 2-1. N/2보다 작을 경우 처리하기

function solution(nums) {
  // 1. 중복 없애기
  let set = [...new Set(nums)];

  // 2. 최대로 가장 많은 종류의 개수는 N/2, 길이는 항상 짝수임으로 굳이 Math 메서드 필요 없음
  let max = nums.length / 2;
  // if(set.length >= max) return max;
  // else return set.length   // 2-1. N/2보다 작을 경우 처리하기

  return set.length >= max ? max : set.length; // if-else로 return이 가능하다면 삼항 연산자 활용하기
}

// 코드를 더 가독성 있게 할 수 없을까? 크기를 비교하는 거라면 Math 메서드를 활용해보자! => 의미 해석 빠르게 파악 가능

function solution(nums) {
  // 1. 중복 없애기
  let set = [...new Set(nums)];

  // 2. 최대로 선택할 수 있는 종류의 개수는 N/2
  let max = nums.length / 2;

  // 3. N/2와 set.length 중 작은 값을 반환
  return Math.min(set.length, max);
}
