// 1부터 100까지 모두 더하는 Code를 <pass> 부분에 완성하세요. for를 사용해야 합니다.

let s = 0;

// for 문
for (let i = 1; i <= 100; i++) {
    s += i;
}
console.log(s);

// 가우스 덧셈
s = 100;
s = s * (s + 1) / 2;
console.log(s);


// reduce() 메서드
const arr = Array.from({ length: 100 }, (_, i) => i + 1);
let sum = arr.reduce((acc, curr) => {
    // console.log("acc:", acc, "curr:", curr);
    return acc + curr
}, 0);

console.log(sum);

// 재귀
function addNumbers(n) {
    if (n === 1) return 1;
    else return n + addNumbers(n - 1);
}
sum = addNumbers(100);
console.log(sum);


