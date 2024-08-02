function solution(list, searchList) {
  const bst = new BST();
  for (const key of list) {
    bst.insert(key);
  }

  const result = [];
  for (const searchVal of searchList) {
    if (bst.search(searchVal)) {
      result.push(true);
    } else {
      result.push(false);
    }
  }
  console.log(result);
  asdasd;

  return result;
}