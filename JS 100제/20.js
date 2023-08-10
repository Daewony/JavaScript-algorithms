const n = prompt("두 숫자 입력").split(' ')
console.log(String(Number(n[0]) / Number(n[1])) + " " + String(Number(n[0]) % Number(n[1])));
console.log(Number(n[0]) / Number(n[1]), Number(n[0]) % Number(n[1]));

const [a, b] = prompt("두 숫자 입력").split(' ').map(Number);
console.log(Math.floor(a / b), a % b);
