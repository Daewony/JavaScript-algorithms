function solution(s) {
    s = s.split(' ');
    console.log(s);

    for (let i = 0; i < s.length; i++) {
        for (let j = 0; j < s[i].length; j++) {
            // 대문자로 변환이 안되는 이유는 불변이기 때문이다
            if (j % 2 === 0) s[i][j] = s[i][j].toUpperCase();

        }
        console.log(s);
    }

}

function solution(s) {
    s = s.split(' ');
    console.log(s);

    for (let i = 0; i < s.length; i++) {
        s[i] = s[i].split('');
        for (let j = 0; j < s[i].length; j++) {
            if (j % 2 === 0) s[i][j] = s[i][j].toUpperCase();
            else s[i][j] = s[i][j].toLowerCase(); // 홀수 인덱스 소문자 처리
        }
        s[i] = s[i].join('');
    }
    s = s.join(' ');
    return s;
}


// 메서드 기억이 안남, toUpperCase(), toLowerCase();

function toWeirdCase(s) {
    //함수를 완성해주세요
    return s.toUpperCase().replace(/(\w)(\w)/g, function (a) { return a[0].toUpperCase() + a[1].toLowerCase(); })

}

function toWeirdCase(s) {
    return s.split(' ').map((a) => {
        return a.split('').map((b, i) => {
            return (i % 2 === 0) ? b.toUpperCase() : b.toLowerCase();
        }).join('');
    }).join(' ');
}

function solution(s) {
    let arr = s.split(" ");
    return arr.map(v => {
        let newStr = "", num = 0;
        for (let str of v) {
            newStr += !(num % 2) ? str.toUpperCase() : str.toLowerCase();
            num++;
        }
        return newStr;
    }).join(" ");
}

