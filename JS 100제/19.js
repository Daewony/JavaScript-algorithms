const num = prompt("a b입력");
const n = prompt('수 입력').split(' ');
console.log(num, n);
console.log(Number(num.split(" ")[0]) ** Number(num.split(" ")[1]));

const n2 = prompt('수를 입력하세요.').split(' ');

console.log(Math.pow(parseInt(n2[0], 10), parseInt(n2[1], 10)));