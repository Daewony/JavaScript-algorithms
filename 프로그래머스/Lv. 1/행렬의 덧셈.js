// push() 메서드는 배열의 끝에 하나 이상의 요소를 추가하고, 배열의 새로운 길이를 반환한다


function solution(arr1, arr2) {
    let sum = [];
    for (var i = 0; i < arr1.length; i++) {
        var temp = [];
        for (var j = 0; j < arr1[i].length; j++) {
            temp.push(arr1[i][j] + arr2[i][j]);
        }
        sum.push(temp);
    }
    return sum;
}


// map() 메서드는 배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환한다
// ex)
// const array1 = [1, 4, 9, 16];

// // Pass a function to map
// const map1 = array1.map(x => x * 2);

// console.log(map1);
// // Expected output: Array [2, 8, 18, 32]

function sumMatrix(A, B) {
    return A.map((arr1, idx1) => arr1.map((val, idx2) => val + B[idx1][idx2]));
}