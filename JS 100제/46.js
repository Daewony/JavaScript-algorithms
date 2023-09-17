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
for(let i=1;i<=20;i++){
    arr += i;
}
arr = arr.split('');

console.log(arr);

