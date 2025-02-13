function solution1(arr) {
  const filteredArr = arr.filter((e) => e > 0);

  return filteredArr;
}

console.log(solution1([-3, 0, 2, -5, 7, 1]));

function solution2(arr, minLength) {
  const filteredArr = arr.filter((e) => e.length >= minLength);

  return filteredArr;
}

console.log(solution2(["apple", "cat", "banana", "dog"], 4));
