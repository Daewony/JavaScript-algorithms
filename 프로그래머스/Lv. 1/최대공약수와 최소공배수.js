function solution(n, m) {
    let l = Math.max(n, m);
    let s = Math.min(n, m);
    let arr = [];
    // 최대 공약수
    for (let i = s; i >= 1; i--) {
        if (n % i === 0 && m % i === 0) {
            arr.push(i);
            break;
        }
    }
    // 최소공배수
    arr.push(arr[0] * (n / arr[0]) * (m / arr[0]))
    return arr;
}