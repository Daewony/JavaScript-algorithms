function sum(arr) {
  return arr.reduce((acc, cur) => acc + cur, 0);
}

let arr = [1, 2, 3, 4, 5];
console.log(sum(arr));

function evenFilter(arr) {
  return arr.filter((v) => v % 2 === 0);
}

arr = [1, 2, 3, 4, 5, 6];
console.log(evenFilter(arr));

arr = [1, 3, 5];
function mutipleArr(arr) {
  return arr.map((v) => v * 2);
}

console.log(mutipleArr(arr));
