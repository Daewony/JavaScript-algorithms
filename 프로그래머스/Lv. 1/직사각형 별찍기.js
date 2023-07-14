process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    let star = '';
    for (var i = 1; i <= b; i++) {
        for (var j = 1; j <= a; j++) {
            star += '*';
        }
        console.log(star);
        star = '';
    }
});

// repeat() 메서드는 문자열을 주어진 횟수만큼 반복해 붙인 새로운 분자열을 반환합니다.


process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    console.log((('*').repeat(a) + `\n`).repeat(b))

    const star = '*'.repeat(a);
    for (let i = 0; i < b; i++) {
        console.log(star);
    }
    star = `${'*'.repeat(a)}\n`;
    console.log(star.repeat(b));

});



