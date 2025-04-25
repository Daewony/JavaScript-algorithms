입력: "a1b2c3";
출력: 6; // 1 + 2 + 3

const input = "a1b2c3";
const getTotalNumberFromString = (str) => {
  // return [...str].reduce((acc, cur) => {
  //   // 숫자인건만 값을 누적하기
  //   if (!isNaN(cur)) {
  //     return Number(acc) + Number(cur);
  //   }
  //   return Number(acc);
  // }, 0);

  return [...str].reduce(
    (acc, cur) => (!isNaN(cur) ? acc + Number(cur) : acc),
    0
  );
};
console.log(getTotalNumberFromString(input));
