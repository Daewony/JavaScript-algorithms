function solution(s) {
    let arr = [];
    for (var i = 0; i < s.length; i++) {
        arr.push(s[i]);
    }
    arr.sort()
    s = '';
    for (var i = arr.length - 1; i >= 0; i--) {
        s += arr[i];
    }
    return s;
}

// console.log(solution("aAbBcC"));

function solution(s) {
    console.log(s.split(""));
    console.log(s.split("").sort());
    console.log(s.split("").sort().reverse());
    console.log(s.split("").sort().reverse().join(""));



    return s
        .split("")
        .sort()
        .reverse()
        .join("");
}


solution("aAbBcC");
// console.log(solution("aAbBcC"));