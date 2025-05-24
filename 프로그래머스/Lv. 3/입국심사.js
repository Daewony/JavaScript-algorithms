// 나의 문제 -> 제한사항을 확인하지 못해, 예시만 보고 심사관이 2명일때만 처리하는 함수를 만듦
//

function solution(n, times) {
  let l = 1;
  let r = Math.max(...times) * n;
  let answer = r;

  while (l <= r) {
    let mid = Math.floor((l + r) / 2);

    let sum = 0;
    for (let a of times) {
      sum += Math.floor(mid / a);
    }
    if (sum >= n) {
      answer = mid;
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }
  return answer;
}

// function solution(n, times) {
//     var answer = 0;
//     let [s1,s2] = times; // 심사
//     // s1이 작은수로 설정
//     if(s1 > s2) {
//         [s1,s2] = [s2,s1];
//     }

//     let t = 0 // 현재 시간
//     let i = 1; // 몇 배수
//     // 심사관 걸리는 시간의 배수를 통해 정답 찾기
//     while(true) {
//        let p = 0; // 통과한 사람
//         t = s1*i;
//         p = Math.floor(t/s1) +  Math.floor(t/s2);
//         if(p === n) {
//             answer = s1*i;
//             break;
//         }

//         t = s2*i;
//         p = Math.floor(t/s1) +  Math.floor(t/s2);
//         if(p === n) {
//             answer = s2*i;
//             break;
//         }
//         i++;
//     }

//     return answer;
// }

// 어떤 자료구조를 활용하지?
// 나눗셈으로 간단히 풀리는 문제 아닌가?
// 몫의 내림을 통해 풀면 될거같은데..
// 반복문으로 브루트포스 방법말고는 없나?
// 각각의 배수로 확인하는 방법은 어떤가?
//
