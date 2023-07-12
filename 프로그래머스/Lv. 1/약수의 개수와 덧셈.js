function solution(left, right) {
    let sum = 0;
    // 약수 체크
    for (var i = left; i <= right; i++) {
        var cnt = 1; // 1
        for (var j = 2; j <= i; j++) {
            if (i % j === 0) cnt += 1;
        }
        // 약수 체크 후 짝수개이면 더하기 홀수개이면 빼기
        sum = cnt % 2 === 0 ? sum += i : sum -= i;
    }
    return sum;
}

function solution(left, right) {
    var answer = 0;
    for (let i = left; i <= right; i++) {
        answer = Number.isInteger(Math.sqrt(i)) ? answer -= i : answer += i;
    }
    return answer;
}