// 01_[Tree] 구현.js
// 2022.08.21(Sun)

class Tree {
  // constructor로 만든 객체 = 트리 node!
  constructor(value) {
    this.value = value;
    this.children = []; // 노드의 자식 노드들을 담을 수 있도록
  }

  // [트리 삽입 메서드 생성]
  insertNode(value) {
    const childNode = new Tree(value); // tree의 자식 노드 생성
    this.children.push(childNode);
  }

  // [tree에서 value값 탐색]
  // 트리 안에 해당 값이 포함되어 있는지 확인하는 메서드
  contains(value) {
    // 현재 노드의 value 값과 찾는 값이 일치한다면 (값이 포함되어 있다면)
    if (this.value === value) {
      return true;
    }

    // 값을 찾을 때까지 자식 노드 순회 => 노드의 children 배열 탐색
    for (let i = 0; i < this.children.length; i += 1) {
      const childNode = this.children[i];
      if (childNode.contains(value)) {
        return true;
      }
    }

    // 전부 탐색했음에도 값을 찾지 못하면 false 반환
    return false;
  }
}

// ---------------------------------------------------

// Tree 사용 예제
const rootNode = new Tree(null);

for (let i = 0; i <= 4; i++) {
  if (rootNode.children[i]) {
    rootNode.children[i].insertNode(i);
  }
  rootNode.insertNode(i);
}
rootNode; // {value: null, children: Array(5)}
rootNode.contains(5); // false
rootNode.contains(1); // true
