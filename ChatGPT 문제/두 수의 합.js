// 입력: [1, 2, 3, 4, 6], (target = 7);
// 출력: true; // 3 + 4 = 7

// 투포인터 -> 어디까지 활용 가능하지?

const input = [1, 2, 3, 4, 6];
const target = 7;
// 두 수의 합이 존재하는지 확인
const checkTargetFromTwoPointer = (arr, target) => {
  // 반복문 활용
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[i] + arr[j] === target) return true;
    }
  }

  return false;
};

console.log(checkTargetFromTwoPointer(input, target));
