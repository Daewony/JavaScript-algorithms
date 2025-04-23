// 중복된 값이 없고, 내림차순으로 정렬됨
function solution(arr) {
  const uniqueArr = [...new Set(arr)];
  uniqueArr.sort((a, b) => b - a);

  return uniqueArr;
}

// TEST 코드 입니다. 주석을 풀고 실행시켜 보세요
console.log(solution([4, 2, 2, 1, 3, 4])); // 반환값 : [4, 3, 2, 1]
console.log(solution([2, 1, 1, 3, 2, 5, 4])); // 반환값 : [5, 4, 3, 2, 1]

const arr = ["apple", "kiwi", "banana"];
arr.sort((a, b) => a.length - b.length);
console.log(arr);

const users = [
  { name: "Tom", age: 25 },
  { name: "Jane", age: 20 },
  { name: "Bob", age: 30 },
];

users.sort((a, b) => a.name - b.name);
console.log(users);
