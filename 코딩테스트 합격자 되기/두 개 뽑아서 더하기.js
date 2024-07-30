// 모든 수를 더한 다음에 정렬하기

function solution(numbers) {
  let answer = [];

  // 반복문으로 서로 다른 인덱스의 두개의 수 더하기
  for (let i = 0; i < numbers.length; i++) {
    // for(let j=i+1;j<numbers.length;j++){
    for (let j = 0; j < i; j++) {
      // 더한 값을 push해서 배열에 값을 넣기
      answer.push(numbers[i] + numbers[j]);
    }
  }

  // 중복값 제거한 후, 배열 정렬
  answer = [...new Set(answer)].sort((a, b) => a - b);

  return answer;
}
