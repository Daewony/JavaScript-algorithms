function solution(food) {
    //     food[1]~food[3]이 홀수인가 짝수인가가 관건
    //     나머지를 빼서 적절하게 배치하기
    //     차례차례 문자열을 추가한 후 해당 food의 갯수를 줄이기
    //     reverse를 이용해서 반대편을 완성한후, 원본 + 0 + 뒤집힌 원본 으로 return 하기

    //     ** filter를 써야할지 map을 써야할지 헷갈림(조건문이니 filter 아닐까? 라는 추측함)

    // map,filter는 continue를 사용할 수 없음, 왜? 반복문이 아니라 콜백함수이기때문임
    let front = "";
    let back = "";
    let tmp = food.map((e, i) => {
        if (i === 0) return e;
        return e - e % 2;
    })
    for (let i = 1; i < food.length; i++) {
        while (tmp[i] > 0) {
            front += `${i}`;
            back += `${i}`;
            tmp[i] -= 2;
        }
    }
    return front + "0" + back.split("").reverse().join("");
}

// 굳이 뒤집히면 같은 front, back 대신 arr로 통일해서 사용하자


function solution(food) {
    let res = '';
    for (let i = 1; i < food.length; i++) {
        res += String(i).repeat(Math.floor(food[i] / 2));
    }
    return res + '0' + [...res].reverse().join('');
}

function solution(food) {
    var answer = '';
    let arr = [];

    food.map((f, i) => {
        f = f % 2 == 0 ? f : f - 1;
        for (let j = 0; j < f / 2; j++) {
            arr.push(i);
        }
    });

    answer = arr.join('') + 0 + arr.reverse().join('');

    return answer;
}
