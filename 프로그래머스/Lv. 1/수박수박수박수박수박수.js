function solution(n) {
    let arr = '';
    for (var i = 0; i < n; i++) {
        if (i % 2 === 0) arr += '수';
        else arr += '박';
    }
    console.log(n / 2);
    return arr;
}


var solution = n => '수박'.repeat(n / 2) + (n % 2 === 1 ? '수' : '');