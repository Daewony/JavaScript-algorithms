// 최대가 종류의 수임 -> 중복되지 않은 수의 총 길이를 구하면됨
// 최대가 n/2 크기임, 이것보다 큰 것인지 비교해보아야함
function solution(nums) {
  var answer = 0;
  let arr = [];
  for (let i = 0; i < nums.length; i++) {
    if (!arr.includes(nums[i])) {
      arr.push(nums[i]);
    }
  }

  answer = arr.length > nums.length / 2 ? nums.length / 2 : arr.length;
  return answer;
}

// 중복을 없애는 함수

// function removeDuplicates(array) {
//   return [...new Set(array)]
// }
function removeDuplicates(array) {
  return array.filter((item, index) => array.indexOf(item) === index);
}
const array = [1, 2, 2, 3, 4, 4, 5];
console.log(removeDuplicates(array));
