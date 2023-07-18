function solution(n, arr1, arr2) {
    var answer = [];
    for (let i = 0; i < n; i++) {
        let tmp = arr1[i].toString(2);
        if (arr1[i].toString(2).length < n) {
            tmp = '0'.repeat(n - arr1[i].toString(2).length) + arr1[i].toString(2);
        }
        console.log(tmp);
        // 01001, 11110
    }

    return answer;
}