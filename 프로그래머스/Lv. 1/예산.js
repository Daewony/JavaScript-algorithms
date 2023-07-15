function solution(d, budget) {
    //  최대 몇 개의 부서 지원 => 최소 비용으로 많은 팀 지원
    //     budget에 넘지않게 예산이 작은 팀을 우선으로 선택하여 계산하자
    //     작은 순서로 보고싶다 -> 정렬하고싶다
    d = d.sort((a, b) => a - b); // 정렬은 문자열 기준이라는 것을 잊지말자 -> 앞의 숫자순으로 정렬됨
    let sum = 0;
    let i = 0;
    let res = 0;
    while (sum + d[i] <= budget) { // 어? 무한루프에 안빠졌네? -> d[i]가 없으면 NaN, NaN을 비교하면 false 나옴
        sum += d[i];
        i++;
        res++;
    }

    return res;
}

// reduce() 메서드는 배열의 각 요소에 대해 주어진 리듀서 함수를 실행하고, 하나의 결과값을 반환합니다

function solution(d, budget) {
    d.sort((a, b) => a - b);

    while (d.reduce((a, b) => (a + b), 0) > budget) d.pop();

    return d.length;
}