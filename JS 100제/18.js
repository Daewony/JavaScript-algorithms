const num = prompt("3개의 과목 성적 입력");
// console.log(num.split(' ').reduce((acc, cur) => {
//     console.log(num.split(' '));
//     console.log(acc, cur);
//     let num_length = num.split(' ').length
//     // console.log(+acc + +cur);

//     return (+acc + +cur) / num_length;
// }));
let sum = 0;
for (let i = 0; i < num.split(' ').length; i++) {
    sum += +num.split(' ')[i];
}
sum /= num.split(' ').length;

console.log(sum);