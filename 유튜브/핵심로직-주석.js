// 배열에 있는 것과 해당 인덱스를 순차적으로 출력해보기

let a = [1, 3, 45, 2, 10];

// 배열로 분할 및 병합
let str = "Hello World";
str = str.split(" ");
console.log(str);
str = str.join(" hi ");
console.log(str);

// 배열 정렬

let numbers = [3, 1, 4, 1, 5, 9, 2, 6, 4, 3, 7];
numbers = numbers.sort((a, b) => a - b);
console.log(numbers);

numbers = numbers.sort((a, b) => (a - b)*-1);
console.log(numbers);

// 배열 짝수만 나오게하기

numbers = [1, 2, 3, 4, 5, 6];
console.log(numbers.filter(e => e % 2 == 0));

// 각 배열의 값의 2배로 반환하기
console.log(numbers.map(e => e * 2));

// 배열의 값들을 합쳐서 하나의 값을 만들기
console.log(numbers.reduce((total, e) => total + e, 0))

// 사용법 꼭 외우기
// find
// findIndex
// includes
// substring
// slice
// Object.keys
// Object.values
// Object.entries
// Math.round
// Math.ceil
// Math.floor
// Math.abs

const graph = {
  1: [2, 3],
  2: [4],
  3: [4, 5],
  4: [],
  5: []
};

const dfs = (here, visited = new Set())=> {
  if (visited.has(here)) return;
  visited.add(here);
  console.log(here);
  graph[here].forEach(e=>dfs(e,visited))
}

dfs(1);

// 이진 탐색
const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


const bs = () => {
  let lo = 0;
  let hi = num.length - 1;
  console.log(lo,hi);
  const target = 3;
  while (lo <= hi) {
    let mid = Math.floor((lo + hi) / 2);
    if (num[mid] == target) {
      console.log(target);
      return;
    } else if (num[mid] < target) {
      lo = mid + 1;
    } else {
      hi = mid - 1;
    }
  }
  console.log(-1);
  return -1;
}
bs();

// 50개 0

a = Array(50).fill(0);
console.log(a);
a = Array(5).fill().map(e => Array(5).fill(1));
console.log(a);

// 피보나치 fibo(n) = fibo(n-1) + fibo(n-2) // DP 문제, 중복되는 것이 있음

const fibo = (idx, memo = {}) => {
  if (idx <= 2) return 1
  if (idx in memo) return memo[idx];
  memo[idx] = fibo(idx - 1, memo) + fibo(idx - 2, memo);
  return memo[idx];
}
const ref = fibo(10);
console.log(ref);

// 배열 스왑
const arr = [1, 2, 3, 4, 5];
[arr[1], arr[3]] = [arr[3], arr[1]];
console.log(arr);


