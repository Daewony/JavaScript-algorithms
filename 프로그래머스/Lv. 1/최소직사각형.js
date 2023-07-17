function solution(sizes) {
    // for(let [i,j] of sizes){
    //     console.log(i,j);
    // }

    let w = 0;
    let h = 0;

    // 세로가 가로보다 크면 swap하기
    // 가장큰 가로, 세로 찾기
    for (let i = 0; i < sizes.length; i++) {
        if (sizes[i][0] < sizes[i][1]) {
            let tmp = sizes[i][0];
            sizes[i][0] = sizes[i][1];
            sizes[i][1] = tmp;
        }
        if (w < sizes[i][0]) w = sizes[i][0];
        if (h < sizes[i][1]) h = sizes[i][1];
    }
    return w * h;
}

function solution(sizes) {
    const [hor, ver] = sizes.reduce(([h, v], [a, b]) => [Math.max(h, Math.max(a, b)), Math.max(v, Math.min(a, b))], [0, 0])
    return hor * ver;
}