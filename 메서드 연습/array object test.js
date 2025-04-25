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

// -------------------------

const charsLength = (string) => {
  const obj = {};
  for (let char of string) {
    // if (obj[char]) obj[char]++;
    // else obj[char] = 1;

    obj[char] = (obj[char] || 0) + 1;
  }
  return obj;
};

console.log(charsLength("hello"));

// -----------------------
const countryCode = {
  KR: "Korea",
  JP: "Japan",
  US: "United States",
};

console.log(Object.keys(countryCode));

const users = [
  { id: 1, name: "Tom" },
  { id: 2, name: "Jane" },
];

const userMap = {};
users.forEach((user) => (userMap[user.id] = user.name));

console.log(userMap);

const ManyShowNumber = (arr) => {
  const count = {};
  for (let char of arr) {
    count[char] = (count[char] || 0) + 1;
  }

  let maxCount = 0;
  let n = null;

  // for (let char of arr) {
  //   if (max < count[char]) max = count[char];
  // }

  for (let key in count) {
    if (count[key] > maxCount) {
      maxCount = count[key];
      n = key;
    }
  }

  return Number(n);
};

console.log(ManyShowNumber([1, 2, 2, 3, 3, 3, 4]));

// -----------------

const ManyShowNumber2 = (arr) => {
  const count = {};
  const res = [];

  for (let char of arr) {
    count[char] = (count[char] || 0) + 1;
  }

  // 중복값이 가장 많은 수 찾기
  let maxCount = 0;

  for (let key in count) {
    if (count[key] > maxCount) maxCount = count[key];
  }

  // 해당 중복값과 같은 숫자 찾기
  for (let key in count) {
    if (count[key] === maxCount) res.push(Number(key));
  }

  return res;
};

console.log(ManyShowNumber2([1, 2, 2, 3, 3]));

const getMostFrequentNumbers = (arr) => {
  const count = {};
  let maxCount = 0;

  for (let num of arr) {
    count[num] = (count[num] || 0) + 1;
    if (count[num] > maxCount) maxCount = count[num];
  }

  return Object.keys(count)
    .filter((key) => count[key] === maxCount)
    .map(Number);
};

console.log(getMostFrequentNumbers([1, 2, 2, 3, 3]));

// ---------

const getAnswerNumber = (arr) => {
  const pattern = [1, 2, 3];
  let res = 0;

  for (let i = 0; i < arr.length; i++) {
    if (pattern[i % pattern.length] === arr[i]) res++;
  }

  return res;
};

console.log(getAnswerNumber([1, 3, 2, 1, 2, 3, 1]));

const countCorrectAnswers = (answers) => {
  const pattern = [1, 2, 3];

  return answers.reduce((count, answer, idx) => {
    return count + (answer === pattern[idx % pattern.length] ? 1 : 0);
  }, 0);
};

console.log(countCorrectAnswers([1, 3, 2, 1, 2, 3, 1]));

// --------------------

// arr.reduce((누적값,현재값) =>{
//   return 누적값 + 현재값
// },0)
{
  const sum = [3, 6, 2, 9, 1].reduce((acc, cur) => acc + cur, 0);
  console.log(sum);
}

{
  const mul = [2, 4, 1, 3].reduce((acc, cur) => acc * cur, 1);
  console.log(mul);
}

{
  const maxNumber = [7, 5, 9, 2, 8].reduce(
    (acc, cur) => (cur > acc ? cur : acc),
    -Infinity
  );
  console.log(maxNumber);
}

{
  const combineCharArr = ["a", "b", "c"].reduce((acc, cur) => acc + cur);
  console.log(combineCharArr);
}

// -----------------

{
  const students = [
    { name: "Tom", score: 80 },
    { name: "Jane", score: 90 },
    { name: "Bob", score: 70 },
  ];

  // 출력: 240

  let totalScore = 0;
  for (let i of students) {
    totalScore += i.score;
  }
  console.log(totalScore);

  for (let i in students) {
    console.log(i);
  } // 0,1,2 => 배열의 인덱스임

  // const getTotalScoreForStudent = students;
  // console.log(getTotalScoreForStudent);

  const res = students.reduce((acc, student) => acc + student.score, 0);
  console.log(res);
}

{
  const products = [
    { name: "Laptop", category: "Electronics" },
    { name: "Shirt", category: "Clothing" },
    { name: "Phone", category: "Electronics" },
    { name: "Pants", category: "Clothing" },
    { name: "TV", category: "Electronics" },
  ];

  // { Electronics: 3, Clothing: 2 }

  // 카테고리 빈 객체 만들기
  const category = {};

  // 배열 안의 객체를 순회해서 카운트 증가시키기
  for (let product of products) {
    category[product.category] = (category[product.category] || 0) + 1;
  }

  // 출력하기
  console.log(category);

  const categoryCount = products.reduce((acc, product) => {
    acc[product.category] = (acc[product.category] || 0) + 1;
    return acc;
  }, {});

  console.log(categoryCount);
}

{
  const students = [
    { name: "Tom", score: 80 },
    { name: "Jane", score: 95 },
    { name: "Bob", score: 70 },
  ];

  // 출력: "Jane"

  // 배열을 순회를 한다 -> for..of, reduce 활용가능

  // for..of 방식 풀이
  let highScoreStudent1 = null;
  let maxScore = -Infinity;
  for (let student of students) {
    if (maxScore < student.score) {
      highScoreStudent1 = student.name;
      maxScore = student.score;
    }
  }
  console.log(highScoreStudent1);
  // 위 풀이 방식 단점, 공통 최고 점수를 받은 학생의 이름을 반환 못함, 하나의 이름만 반환됨

  // reduce 방식 + filter

  const maxScore2 = students.reduce(
    (acc, student) => (acc < student.score ? student.score : acc),
    0
  );

  const highScoreStudent2 = students.filter(
    (student) => student.score === maxScore2
  );
  console.log(highScoreStudent2[0].name);

  const topStudent = students.reduce(
    (acc, student) => {
      if (student.score > acc.score) {
        return student;
      }
      return acc;
    },
    { name: null, score: -Infinity }
  );

  console.log(topStudent.name);
}
