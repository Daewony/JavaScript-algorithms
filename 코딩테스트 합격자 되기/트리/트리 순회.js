function preorder(nodes, idx) {
  // idx가 노트 배열의 길이보다 작을 때
  if (idx < nodes.length) {
    // 루트 노드를 출력한 다음, 왼쪽, 오른쪽 서브 트리를 재귀호출하여 출력 순서대로 이어붙임
    let ret = `${nodes[idx]}`;
    ret += preorder(nodes, idx * 2 + 1);
    ret += preorder(nodes, idx * 2 + 2);
    return ret;
  }

  // idx >= nodes.length 일때는 빈 문자열 반환
  return "";
}

function inorder(nodes, idx) {
  if (idx < nodes.length) {
    let ret = inorder(nodes, idx * 2 + 1);
    ret += `${nodes[idx]}`;
    ret += inorder(nodes, idx * 2 + 2);
    return ret;
  }

  return "";
}

function postorder(nodes, idx) {
  if (idx < nodes.length) {
    let ret = postorder(nodes, idx * 2 + 1);
    ret = postorder(nodes, idx * 2 + 2);
    ret += `${nodes[idx]}`;
    return ret;
  }
  return "";
}

// 감이 안잡힘
function solution(nodes = [1, 2, 3, 4, 5, 6, 7]) {
  return [
    preorder(nodes, 0).trim(),
    inorder(nodes, 0).trim(),
    postorder(nodes, 0).trim(),
  ];

  return nodes;
}

// 1,2,4,5,3,6,7 -> 0,1,3,4,2,5,6

// 4,2,5,1,6,3,7
// 4,5,2,6,7,3,1

console.log(solution());
