function solution(n) {
    let sum = 0;
    for (var i = 1; i <= n; i++) {
        if (n % i === 0) sum += i;
    }
    return sum;
}
