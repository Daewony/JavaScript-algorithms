function solution(n) {
  return n
    .toString()
    .split("")
    .map((e) => Number(e))
    .reduce((acc, cur) => {
      console.log(acc);
      return acc + cur;
    });
}
