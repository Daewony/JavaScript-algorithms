// 시간 오버
// 생각나는대로 풀었던 것이 문제
// 
function solution(s, n) {
    var answer = '';
    // 아스키코드 값을 알아서 더하기
    // 한칸씩 밀어내면서 z, Z인지 확인하기, 아직 더 민다면 a, A로 시작

    for (let i = 0; i < s.length; i++) {

        if (s[i] === 'z') answer += 'a';
        else if (s[i] === 'Z') answer += 'A';
        else if ('a' <= s[i] && s[i] <= 'z' || 'A' <= s[i] && s[i] <= 'Z') answer += String.fromCharCode(s.charCodeAt(i) + n);
        else answer += ' ';
    }


    return answer;
}

// 이것의 단점은 n=1일때만 작동되는 단점이 있음
