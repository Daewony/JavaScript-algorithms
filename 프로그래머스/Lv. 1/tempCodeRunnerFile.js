return absolutes.reduce((sum, v, i) => sum += v * (signs[i] ? 1 : -1), 0);



// function solution(absolutes, signs) {
//     return absolutes.reduce((acc, v, i) => acc += v * (signs[i] ? 1 : -1), 0);
// }