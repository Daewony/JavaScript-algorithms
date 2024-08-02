// 반복문을 활용한 방법

function solution(lst, searchList) {
  let answer = [];
  for (let i = 0; i < searchList.length; i++) {
    for (let j = 0; j < lst.length; j++) {
      console.log(searchList[i], lst[j]);
      if (searchList[i] === lst[j]) {
        answer.push(true);
      }
    }

    if (i + 1 !== answer.length) answer.push(false);
  }

  return answer;
}

// 이진탐색으로 활용하기

class Node {
  constructor(key) {
    this.left = null;
    this.right = null;
    this.val = key;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(key) {
    if (!this.root) {
      this.root = new Node(key);
    } else {
      let curr = this.root;
      while (true) {
        if (key < curr.val) {
          if (curr.left) {
            curr = curr.left;
          } else {
            curr.left = new Node(key);
            break;
          }
        } else {
          if (curr.right) {
            curr = curr.right;
          } else {
            curr.right = new Node(key);
            break;
          }
        }
      }
    }
  }

  search(key) {
    let curr = this.root;
    while (curr && curr.val !== key) {
      if (key < curr.val) {
        curr = curr.left;
      } else {
        curr = curr.right;
      }
    }
    return curr !== null;
  }
}

function solution(list, searchList) {
  const bst = new BST();
  for (const key of list) {
    bst.insert(key);
  }

  const result = [];
  for (const searchVal of searchList) {
    result.push(bst.search(searchVal)); // 검색 결과를 배열에 추가
  }

  return result;
}

// 해시로 풀기

function solution(list, searchList) {
  const hashMap = new Map();
  for (const key of list) {
    hashMap.set(key, true);
  }
  const result = [];
  for (const searchVal of searchList) {
    result.push(hashMap.has(searchVal));
    console.log(searchVal, result);
  }
  return result;
}

console.log(solution([5, 3, 8, 4, 2, 1, 7, 10], [1, 2, 5, 6]));
console.log(solution([1, 3, 5, 7, 9], [2, 4, 6, 8, 10]));
