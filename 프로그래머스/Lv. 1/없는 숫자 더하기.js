function solution(numbers) {
    const add = arr => arr.reduce((a, b) => a + b, 0);
    return 45 - add(numbers);
}


// function solution(numbers) {
//     return 45 - numbers.reduce((cur, acc) => cur + acc, 0);
// }