function solution(numbers) {
    //     중복된 값을 없앤다 => 집합을 이용
    //     이중 for문으로 모든 경우의 수를 다 더해보며 배열에 넣는다
    //     집합과 오르차순으로 정렬하고 return 한다
    let set = new Set();
    for (let i = 0; i < numbers.length - 1; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            set.add(numbers[i] + numbers[j])
        }
    }
    let arr = Array.from(set);
    arr.sort((a, b) => a - b);

    return arr;
}

// map으로도 만들수는 없나?

function solution(numbers) {
    const temp = []

    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            temp.push(numbers[i] + numbers[j])
        }
    }

    const answer = [...new Set(temp)] // 이렇게도 할 수 있구나...

    return answer.sort((a, b) => a - b)
}

function solution(numbers) {
    const result = [];

    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            const sum = numbers[i] + numbers[j];
            if (!result.includes(sum)) {
                result.push(sum);
            }
        }
    }

    return result.sort((a, b) => a - b);
}

function solution(numbers) {
    let answer = new Set();

    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            answer.add(numbers[i] + numbers[j]);
        }
    }
    return Array.from(answer).sort((a, b) => a - b);
}
