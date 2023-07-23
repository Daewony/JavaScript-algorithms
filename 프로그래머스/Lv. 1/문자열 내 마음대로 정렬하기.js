function solution(strings, n) {
    var answer = [];
    // 그 위치 알파벳 순서로 정렬 -> 순서가 같을시 전체로 비교하여 정렬
    // 같을때 어떻게 처리하는지가 관건
    let temp = [];
    for (let i of strings) {
        temp.push(i[n]);
    }
    temp.sort();

    for (let i = 0; i < strings.length; i++) {
        for (let j = 0; j < strings.length; j++) {
            if (strings[j][n] === temp[i]) {
                answer.push(strings[j]);
                strings[j][n] = '';
            } ``
        }
    }
    return answer;
}