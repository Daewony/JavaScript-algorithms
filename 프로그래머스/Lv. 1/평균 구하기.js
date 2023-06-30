function solution(arr) {
    let avg = 0;
    for (const key of arr) {
        console.log(key);
        avg += key;
    }

    avg = avg / arr.length;

    return avg
}