function solution(num_list) {
  // return num_list.reverse();
  let re = [];
  for (let i = 0; i < num_list.length; i++) {
    re.push(num_list[num_list.length - 1 - i]);
  }
  return re;
}

let arr = [1, 2, 3, 4, 5];
console.log(arr);
let reversedArr = [...arr].reverse();
console.log(reversedArr); // [5, 4, 3, 2, 1]
let test = arr.reverse();
console.log(test);

let arr2 = [1, 2, 3, 4, 5];
for (let i = 0, j = arr2.length - 1; i < j; i++, j--) {
  let temp = arr2[i];
  arr2[i] = arr2[j];
  arr2[j] = temp;
}
console.log(arr2); // [5, 4, 3, 2, 1]
