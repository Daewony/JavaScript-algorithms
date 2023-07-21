function solution(array, commands) {
    // slice와 sort를 사용할줄 아는지에 관한 문제
    let answer = [];
    for (let [i, j, k] of commands) {
        let tmp = array;
        tmp = tmp.slice(i - 1, j);
        console.log(tmp)
        tmp.sort((a, b) => a - b);
        answer.push(tmp[k - 1]);
    }
    return answer;
}

// 다른 사람 풀이
// map을 이용함
// map() 메서드는 배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환합니다.

function solution(array, commands) {
    return commands.map(v => {
        return array.slice(v[0] - 1, v[1]).sort((a, b) => a - b).slice(v[2] - 1, v[2])[0];
    });
}

function solution(array, commands) {
    return commands.map(([from, to, k]) => {
        console.log(array.slice(from - 1, to));
        console.log(array.slice(from - 1, to).sort((a, b) => a - b));
        console.log(array.slice(from - 1, to).sort((a, b) => a > b).slice(k - 1, k)[0]);
        return array.slice(from - 1, to)
            .sort((a, b) => a - b)
            .slice(k - 1, k)[0];
    });
}