
// 복잡함
function solution(s) {
    // 숫자가 나올때까지 문자 추가
    // 문자가 해당문자에 해당하면 치환
    let res = '';
    var word = "";
    for (var i = 0; i < s.length; i++) {
        if (s[i] >= '0' && s[i] <= '9') res += s[i];
        else word += s[i];
        switch (word) {
            case "zero": res += '0'; word = ''; break;
            case "one": res += '1'; word = ''; break;
            case "two": res += '2'; word = ''; break;
            case "three": res += '3'; word = ''; break;
            case "four": res += '4'; word = ''; break;
            case "five": res += '5'; word = ''; break;
            case "six": res += '6'; word = ''; break;
            case "seven": res += '7'; word = ''; break;
            case "eight": res += '8'; word = ''; break;
            case "nine": res += '9'; word = ''; break;
            default: ;
        }
    }
    return Number(res);
}



// 이 코드의 단점: 시간소요가 많음
function solution(s) {
    let numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    var answer = s;
    for (let i = 0; i < numbers.length; i++) {
        let arr = answer.split(numbers[i]); // 해당 단어가 있으면 2개로 분할
        answer = arr.join(i); // 분할한 것의 중간에 그 값을 넣어 하나의 문자열로 연결하여 만든다 ex) [ '', '4seveneight' ] one -> 14seveneight
    }
    return Number(answer);
}

// replace() 메서드는 어떤 패턴에 일치하는 일부 또는 모든 부분이 교체된 새로운 분자열을 반환한다. 그 패턴은 문자열이나 정규식이 될 수 있으며, 교체 ㅔ문자열은 문자열이나 모든 매치에 대해서 호출된 함수일 수 있다.

// 정규식
// /바꿀문자/g(해당 모든 문자열 변환)i(대소문자 구분하지 않음), 새로운 문자열 반환

// replace(old str,new str)
// repalce(/old str/g, new str)
// repalce(/old str/gi, new str)

// 직관적이라 좋음
function solution(s) {
    s = s.replace(/zero/gi, 0)
        .replace(/one/gi, 1)
        .replace(/two/gi, 2)
        .replace(/three/gi, 3)
        .replace(/four/gi, 4)
        .replace(/five/gi, 5)
        .replace(/six/gi, 6)
        .replace(/seven/gi, 7)
        .replace(/eight/gi, 8)
        .replace(/nine/gi, 9)
    return parseInt(s);
}