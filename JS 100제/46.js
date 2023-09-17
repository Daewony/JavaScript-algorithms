// let arr = [];

// for(let i =1;i<=20;i++){
//     arr.push(i);
// }
// // join 배열을 문자열로
// let sum = Number(arr.join(''));
// let res = 0;
// while(sum>0){

//     res += sum%10;
//     console.log(res,sum,sum%10);
//     sum = Math.floor(sum/10);
// }

// console.log(res);

let arr = '';
let sum = 0;
for(let i=1;i<=20;i++){
    arr += i;
}
arr = arr.split('');
for (const i of arr) {
    sum+=parseInt(i);
}

console.log(sum);


let sum2 = 0;
for (let i = 1; i <= 20; i++) {
    let num = i;
    while (num > 0) {
        sum2 += num % 10; // 숫자의 마지막 자릿수를 더함
        num = Math.floor(num / 10); // 마지막 자릿수를 제거
    }
}

console.log(sum2);
