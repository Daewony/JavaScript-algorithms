function solution(arr) {
    let answer = [];
    let cursor = 0;
    answer.push(arr[0]);
    for (let i = 1; i < arr.length; i++) {
        if (answer[cursor] !== arr[i]) {
            answer.push(arr[i]);
            cursor++;
        }
    }

    return answer;
}

// cursor 대신 length를 응용해서 cursor을 대신할 수 있음

function solution(arr) {
    var answer = [arr[0]];

    for (let i = 1; i < arr.length; i++) {
        if (answer[answer.length - 1] !== arr[i]) {
            answer.push(arr[i]);
        }
    }

    return answer;
}

// filter() 메서드는 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환합니다.
// 새로운 배열을 만들어야한다면 먼저 filter()를 떠올리며 사용할 수 있는지 생각해보자

function solution(arr) {
    return arr.filter((val, index) => val != arr[index + 1]);
}