// 보자마자 반복문으로 모든 수의 합으로 계산 가능 -> 시간이 오래걸린다는 단점 존재
// 이걸 브루트포스 라고 하나?
// Set 혹은 해시를 사용하라는데 왜지?

function solution(arr, target) {}

solution([1, 2, 3, 4, 8], 6); // true   → 2 + 4 = 6
solution([2, 3, 5, 9], 10); // false  → 조건 만족 X
solution([1, 5, 7, 8], 10); // false
solution([5, 5], 10); // true   → 5 + 5이지만 같은 숫자지만 다른 위치 OK
solution([5], 10); // false  → 한 개밖에 없음
