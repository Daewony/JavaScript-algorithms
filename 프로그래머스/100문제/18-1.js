// 보자마자 반복문으로 모든 수의 합으로 계산 가능 -> 시간이 오래걸린다는 단점 존재
// 이걸 브루트포스 라고 하나?
// Set 혹은 해시를 사용하라는데 왜지?햣

function countSort(arr, k) {
  const hashtable = new Array(k + 1).fill(0); // [0,0,0,0,0,0,0]
  for (const num of arr) {
    if (num <= k) {
      hashtable[num] = 1;
    }
    // [0,1,0,0,0,0,0]
    // [0,1,1,0,0,0,0]
    // [0,1,1,1,0,0,0]
    // [0,1,1,1,1,0,0]
  }

  return hashtable;
}

function solution(arr, target) {
  const hashtable = countSort(arr, target);
  console.log(hashtable);
  for (const num of arr) {
    const complement = target - num;
    // 5
    if (
      complement !== num &&
      complement >= 0 &&
      complement <= target &&
      hashtable[complement] === 1
    )
      return true;
  }
  return false;
}

console.log(solution([1, 2, 3, 4, 8], 6)); // true   → 2 + 4 = 6
console.log(solution([2, 3, 5, 9], 10)); // false  → 조건 만족 X
console.log(solution([1, 5, 7, 8], 10)); // false
console.log(solution([5, 5], 10)); // true   → 5 + 5이지만 같은 숫자지만 다른 위치 OK
console.log(solution([5], 10)); // false  → 한 개밖에 없음
