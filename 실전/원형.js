// 규칙이 무엇인가?
// 원형 테이블 6명
// 문제는 "자리마다 판단해서 1 or 0을 출력"하는 게 아니야!

function solution(n, p, s) {
  // const arr = [];
  const arr = Array.from({ length: p }, () => []);
  const sArr = s.split("");

  // 인덱스에 따라 그룹을 맵핑하고, 하나의 색상으로 통일 되어있는지 확인
  sArr.forEach((v, i) => {
    // console.log(v, i);
    arr[i % p].push(v);
  });

  // let maxC = 0;
  // 어떤 옷 색상이 가장 많은지 확인
  // for (let i = 0; i <= 2; i++) {
  //   const len = s.split(`${i}`).length;
  //   if (maxC < len) maxC = len;
  // }

  // 그룹마다 가장 많은 색깔 개수만 남기고 나머지 제거
  let totalMaxKeep = 0;
  for (const group of arr) {
    const freq = {};
    for (const color of group) {
      freq[color] = (freq[color] || 0) + 1;
    }
    const maxVal = Math.max(...Object.values(freq));
    totalMaxKeep += maxVal;

    console.log(group, totalMaxKeep, freq);
  }

  // const freq = {};
  // for (const color of group) freq[color] = (freq[color] || 0) + 1;
  // // const max = Math.max(...Object.values(freq));
  // // console.log(freq); // 많이 사용한 키가 무엇인지 판단하기
  // // console.log(Object.(freq));
  // let maxKey = null;
  // let maxVal = -1;

  // for (const [key, val] of Object.entries(freq)) {
  //   // [key, value] 쌍의 배열로 변환해주는 메서드
  //   if (val > maxVal) {
  //     maxKey = key;
  //     maxVal = val;
  //   }
  // }

  // const isBeautiful = arr.every((group) => new Set(group).size === 1);
  // console.log(isBeautiful);

  // let res = "";
  // for (const c of s) {
  //   if (c === maxKey) {
  //     res += "1";
  //   } else {
  //     res += "0";
  //   }
  // }

  // console.log(arr);
  // 하나의 색상으로 통일이 안되어있다면, 같은 색상 많은 것을 찾아서, 나머지 제거해서, 아름다운 둥글게를 만들기 위한 i 명의 사람 제외시키기
}

const result = solution(4, 2, "0002");
console.log(result);
