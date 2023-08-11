// const n = prompt("반지름 길이 입력").split('').map(Number);
const n = Number(prompt("반지름 길이 입력"));

function circleArea(n) {
    return n * n * Math.PI;
}

console.log(circleArea(n));