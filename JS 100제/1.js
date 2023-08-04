// 다음 배열에서 400, 500를 삭제하는 code를 입력하세요.
var nums = [100, 200, 300, 400, 500];
nums.splice(3, 2);
console.log(nums);

var nums = [100, 200, 300, 400, 500];
nums.splice(nums.indexOf(400), 1);
nums.splice(nums.indexOf(500), 1);
console.log(nums);

var nums = [100, 200, 300, 400, 500];
nums = nums.filter(nums => nums !== 400 && nums !== 500);
console.log(nums);