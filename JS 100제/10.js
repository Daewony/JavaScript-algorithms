// 입력
// 5

// 출력
//     *
//    ***
//   *****
//  *******
// *********

var nums = 5;
for (let i = 1; i <= 5; i++) {
    var star = "";
    for (let j = nums - i; j >= 1; j--) star += ' ';
    for (let j = 1; j <= 2 * i - 1; j++) star += '*';
    console.log(star);
}