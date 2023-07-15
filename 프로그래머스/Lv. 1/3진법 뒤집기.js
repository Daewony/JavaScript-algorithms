function solution(n) {
    // 2진법, 8/4/2/01

    // 3진법,             81/27/9/3/1
    // 45이 3의 몇제곱만큼 가능한지 -> 몇배 가능한지
    // 뺄셈해서 나머지 처리
    let res = '';
    let i = 0;

    while (n - 3 ** i >= 0) i++;
    while (i >= 1) {
        res += Math.floor(n / 3 ** (i - 1));
        n = n % 3 ** (i - 1);
        i--;
    }


    let rev = '';
    // 반전, cursor필요 -> length 이용
    for (let i = res.length - 1; i >= 0; i--) {
        //             filter를 쓸 순 없나?
        rev += res[i];
    }
    // 반전된 것을 10진법
    let ans = 0;
    for (let i = 0; i < res.length; i++) {
        ans += (3 ** (res.length - i - 1) * rev[i]);
    }

    return ans;
}


// 정말 간단하게 푸네
// join() 메서드는 배열의 모든 요소를 연결해하나의 문자열로 만듭니다

solution = (n) => {

    return parseInt([...n.toString(3)].reverse().join(""), 3);
}

function solution(n) {
    const answer = [];
    while (n !== 0) {
        answer.unshift(n % 3);
        n = Math.floor(n / 3);
    }
    return answer.reduce((acc, v, i) => acc + (v * Math.pow(3, i)), 0);
}