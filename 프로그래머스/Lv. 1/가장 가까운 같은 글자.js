function solution(s) {
    // 영어 소문자로만 이루어짐, 
    // 모든 소문자 알파벳의 배열을 만듦 
    // 0이면 그 위치값을 저장하고 새로운 배열에 -1로 push, 단 처음 위치값을 1로 해야함(0으로하면 오류)
    // 0이 아니면 (현재 위치값 - 그 문자 위치값 + 1)로 계산  
    let tmp = new Array(25); // 전부 -1로 설정하는 방법이 없나?
    var answer = [];
    // console.log('z'.charCodeAt()-'a'.charCodeAt());
    for (let i = 0; i < s.length; i++) {
        pos = s[i].charCodeAt() - 'a'.charCodeAt();

        if (tmp[pos] === undefined || tmp[pos] === null) {
            answer.push(-1);
            tmp[pos] = i;
        }
        else {
            answer.push(i - tmp[pos])
            tmp[pos] = i;
        }
    }

    return answer;
}


// 문자 확인에는 Hash가 뛰어나다


function solution(s) {
    const hash = {};

    //     s.map은 문자열이다, 문자열은 배열이 아니므로 안된다.
    return [...s].map((v, i) => {
        let result = hash[v] !== undefined ? i - hash[v] : -1;
        hash[v] = i;
        return result;
    });
}