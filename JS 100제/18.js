const num = prompt("3개의 과목 성적 입력");
console.log(num.split(' ').reduce((acc, cur) => {

    console.log(num.split(' ').length);
    return (+acc + +cur) / num.split(' ').length;
}));