// Set을 이용해 중복 제거하고 배열로 만들기
// filter를 이용해 각 요소의 수 파악하기
// 객체에 담기
// 빈도수가 많은 순서대로 객체를 정렬하기
// 빈도수가 많은 순서대로 배열에 저장하기

const countAndSortWords = (arr) => {
  let set = [...new Set(arr)];
  const words = [];

  set.forEach((s) => {
    const count = arr.filter((a) => a === s).length;
    words.push({ s, count });
  });
  words.sort((a, b) => b.count - a.count || a.s - b.s);
  console.log(words);
  return words.map((word) => word.s);
};

console.log(
  countAndSortWords([
    "apple",
    "banana",
    "apple",
    "orange",
    "banana",
    "apple",
    "banana",
    "banana",
  ])
);

function countAndSortWords2(words) {
  const wordCount = {};

  // 1️⃣ 단어 빈도수 집계
  words.forEach((word) => {
    wordCount[word] = (wordCount[word] || 0) + 1;
  });

  console.log(wordCount);

  // 2️⃣ 객체 데이터를 배열로 변환 후 정렬
  return Object.entries(wordCount)
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0])) // 빈도 내림차순, 알파벳 오름차순
    .map((item) => item[0]); // 단어만 추출
}

// 🔥 테스트 실행
console.log(
  countAndSortWords2(["apple", "banana", "apple", "orange", "banana", "apple"])
);
// 결과: ["apple", "banana", "orange"]
