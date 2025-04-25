입력: [3, 1, 4, 1, 5];
출력: 14;

const input = [3, 1, 4, 1, 5];
const getSum = (arr) => {
  return arr.reduce((acc, cur) => acc + cur, 0);
};

console.log(getSum(input));
