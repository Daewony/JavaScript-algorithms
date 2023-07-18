function solution(t, p) {
    let cnt = 0;
    // 자른다 -> slice -> 원본을 건드리나? => X
    for (let i = 0; i < t.length - p.length + 1; i++) {
        if (parseInt(t.slice(i, p.length + i)) <= parseInt(p)) cnt++;
    }
    return cnt;
}

// typeof 이다, typeof() 아닌
// slice() 메서드는 어떤 배열의 begin부터 end까지에 대한 얕은 복사본을 새로운 배열 객체로 반환합니다. 원본 배열은 바뀌지 않습니다.
