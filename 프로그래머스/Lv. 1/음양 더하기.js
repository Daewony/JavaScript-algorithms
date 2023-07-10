function solution(absolutes, signs) {
    let sum = 0;
    for (var i = 0; i < absolutes.length; i++) {
        sum = signs[i] ? sum += absolutes[i] : sum += (-1 * absolutes[i]); // sum -= absolutes[i]
    }
    return sum;
}

// function solution(absolutes, signs) {
//     return absolutes.reduce((acc, v, i) => acc += v * (signs[i] ? 1 : -1), 0);
// }