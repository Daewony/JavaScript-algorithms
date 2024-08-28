function findMostFrequent(arr) {
  const hashtable = {};
  let max = 0;
  let maxNum = 0;
  for (const num of arr) {
    if (hashtable[num] === undefined) {
      hashtable[num] = 1;
    } else {
      hashtable[num]++;
    }
    if (hashtable[num] > max) {
      max = hashtable[num];
      maxNum = num;
    }
  }
  return maxNum;
}

function findMostFrequent(arr) {
  const frequencyMap = {};

  arr.forEach((value) => {
    frequencyMap[value] = (frequencyMap[value] || 0) + 1;
  });

  let maxFrequency = 0;
  let mostFrequentValue = null;

  for (const key in frequencyMap) {
    console.log(key, frequencyMap[key]);
    if (frequencyMap[key] > maxFrequency) {
      maxFrequency = frequencyMap[key];
      mostFrequentValue = key;
    }
  }
  console.log(frequencyMap);
  return mostFrequentValue;
}

// 예시 사용법
const arr = [1, 2, 3, 4, 2, 2, 3, 4, 4, 4, 5];
console.log(findMostFrequent(arr)); // 출력: 4
