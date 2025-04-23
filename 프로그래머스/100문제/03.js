// 두 개의 수를 뽑아 더해서 만들 수 있는 모든 수를 배열 담기
// 중복 처리하기
// 오름차순으로 정렬하기

function solution(numbers) {
  const answer = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      let a = numbers[i];
      let b = numbers[j];
      let sum = a + b;
      answer.push(sum);
    }
  }

  const SortedUniqueArr = [...new Set(answer)].sort((a, b) => a - b);

  return SortedUniqueArr;
}

const str = "hello";
const uniqueChars = [...new Set(str)];
console.log(uniqueChars);
