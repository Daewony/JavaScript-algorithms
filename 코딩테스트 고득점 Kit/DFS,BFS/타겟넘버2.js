// numbers의 각 요소가 더하거나, 빼는 2가지 경우의 수로 나뉘어짐
// 이 나누는 것을 갈래로 나누어보면 비선형 구조인, 트리 형태를 구축하게됨
// 모든 경우의 수를 확인해서 해당 값이 target이랑 같은지 일일히 비교해서 answer값을 증가하면됨
// 브루트포스처럼 일일히 확인하는 방법밖에 없을까?

// function dfs(numbers, arr) {
//     if(arr.length < numbers.length) arr.push(numbers[arr.length]);

//     dfs(visited, sum+number);
//     dfs(visited, sum-number);
// }

// function solution(numbers, target) {
//     var answer = 0;
//     const arr = [];
//     dfs(numbers,arr);
//     return answer;

// }

function solution(numbers, target) {
  let answer = 0;

  function dfs(index, sum) {
    if (index === numbers.length) {
      if (sum === target) answer++;
      return;
    }

    dfs(index + 1, sum + numbers[index]);
    dfs(index + 1, sum - numbers[index]);
  }

  dfs(0, 0);

  return answer;
}
