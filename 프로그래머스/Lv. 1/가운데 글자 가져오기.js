function solution(s) {
    return s.length % 2 != 0 ? s[Math.floor(s.length / 2)] : s[Math.floor(s.length / 2) - 1] + s[Math.floor(s.length / 2)]
}

function solution(s) {
    return s.substr(Math.ceil(s.length / 2) - 1, s.length % 2 === 0 ? 2 : 1)
}