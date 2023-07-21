function solution(n, arr1, arr2) {
    var answer = [];
    // map을 이용해서도 풀 수 있을거같음

    for (let i = 0; i < n; i++) {
        let tmp1 = arr1[i].toString(2);
        let tmp2 = arr2[i].toString(2);
        if (arr1[i].toString(2).length < n) {
            tmp1 = '0'.repeat(n - arr1[i].toString(2).length) + arr1[i].toString(2);
        }
        if (arr2[i].toString(2).length < n) {
            tmp2 = '0'.repeat(n - arr2[i].toString(2).length) + arr2[i].toString(2);
        }
        let cs = '';
        for (let j = 0; j < n; j++) {
            if (tmp1[j] == '1' || tmp2[j] == '1') cs += '#';
            else cs += ' ';
        }
        answer.push(cs);
    }

    return answer;
}

// 위 코드에 대해 가독성이 안좋아 불만족스러움