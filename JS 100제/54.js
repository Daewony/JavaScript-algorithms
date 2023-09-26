// let num2 = '1 2 3 4 5';
// let num3 = '1 4 2 6 3';

const num = prompt('숫자 여러개 입력: ');
let res = num.split(' ').map(n=>parseInt(n));
let flag = true;

for(let i =0;i<res.length-1;i++){
    if(res[i+1] - res[i] === 1) continue;
    else flag = false;
}

if(flag) console.log("YES");
else console.log("NO");