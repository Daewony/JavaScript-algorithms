// 배열 뿌리고 index 확인하기

let a = [1, 3, 45, 2, 10];
a.forEach((e, i) => {
  console.log(e, i);
});

// 문자열 분할해서 배열 만들기

const str = "Hello World";
let ref = str.split(" ");
console.log(ref);

// 배열을 합쳐서 문자열로 만들기
a = ref.join(' daewon ');
console.log(a);

//

let numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
// 오름차순으로 정렬
numbers = numbers.sort((a, b) => a - b);
console.log(numbers);

// 내림차순으로 정렬
numbers = numbers.sort((a, b) => (a-b)*-1);
console.log(numbers);

// 짝수
numbers = [1, 2, 3, 4, 5, 6];
// numbers.filter((e) => {
//   return e % 2 == 0 ? console.log(e) : null;
// })
ref = numbers.filter(e => e % 2 == 0);
console.log(ref);

// 모든 배열에 곱하기 2하기
ref = numbers.map(e => e * 2);
console.log(ref);

let b = [];
for (let a of numbers) {
  b.push(a * a);
}
console.log(b);

// 배열을 합치거나 하나의 값을 만들고 싶음
ref = numbers.reduce((total, e) => total + e, 0); /* 초기값 0 */
console.log(ref);

// DFS
let graph = {
  1: [2, 3],
  2: [4],
  3: [4, 5],
  4: [],
  5: []
};


const dfs = (here, visited = new Set()) => {
  if (visited.has(here)) return;
  visited.add(here);
  console.log(here);
  graph[here].forEach(e => dfs(e, visited));
};
dfs(1);

// 이진탐색
console.log("#".repeat(10));

a = [1, 2, 3, 4, 5, 6, 7, 8];
const bs = (target) => {
  let low = 0;
  let hight = a.length - 1;
  while (low <= hight) {
    let mid = Math.floor((low + hight) / 2);
    if (a[mid] == target) {
      console.log(target);
      return;
    } else if (a[mid] > target) {
      hight = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return -1;
}
bs(7);


// 50개의 0 배열 만들기
console.log("#".repeat(10));

a = Array(50).fill(0);
console.log(a);


// 5*5 2차원 배열 만들기
console.log("#".repeat(10));

a = Array(5).fill().map(e => Array(5).fill(1));
console.log(a);


// 피보나치
