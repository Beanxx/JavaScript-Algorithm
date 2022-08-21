// 08_[Binary Search Tree] 구현.js
// 2022.08.21(Sun)

class BinarySearchTree {
  // constructor로 만든 객체는 이진 탐색 트리의 Node가 됨
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  // [이진 탐색 트리 삽입 메서드]
  // tree에 value 추가
  insert(value) {
    // 입력값이 현재 노드 값보다 작다면, 왼쪽 노드에서 진행
    if (value < this.value) {
      // 왼쪽이 비어있는지 확인 후 값 삽입 (즉, this.left에 아무것도 없을 경우, 새로운 자식 노드 추가)
      if (this.left === null) {
        this.left = new BinarySearchTree(value);
      }
      // this.left의 자식 노드가 있을 경우, 자식 노드에서 insert 재귀 사용
      else {
        this.left.insert(value);
      }
    }

    // 입력값이 현재 노드보다 크다면, 오른쪽 노드에서 진행
    else if (value > this.value) {
      // this.right에 아무것도 없을 경우, 새로운 자식 노드 추가
      if (this.right === null) {
        this.right = new BinarySearchTree(value);
      }
      // this.left의 자식 노드가 있을 경우, 자식 노드에서 insert 재귀 사용
      else {
        this.right.insert(value);
      }
    } else {
      // 이미 value값을 포함하고 있으므로 아무것도 하지 않음
    }
  }

  // [이진 탐색 트리 안에 해당 값이 포함되어 있는지 확인 메서드]
  // tree의 value값 탐색
  contains(value) {
    // 찾는 value값이 노드의 value와 일치한다면, true 리턴
    if (value === this.value) {
      return true;
    }
    // 찾는 value 값이 현재 노드의 value보다 작다면, 왼쪽에서 contains 재귀 진행
    if (value < this.value) {
      return !!(this.left && this.left.contains(value));
    }
    // 찾는 value 값이 현재 노드의 value보다 크다면, 오른쪽에서 contains 재귀 진행
    if (value > this.value) {
      return !!(this.right && this.right.contains(value));
    }
  }

  // --------------------------------------------

  // [Tree 전위 순회]
  preorder(callback) {
    callback(this.value);

    if (this.left) {
      this.left.preorder(callback);
    }
    if (this.right) {
      this.right.preorder(callback);
    }
  }

  // [Tree 중위 순회]
  inorder(callback) {
    if (this.left) {
      this.left.inorder(callback);
    }
    callback(this.value);
    if (this.right) {
      this.right.inorder(callback);
    }
  }

  // [Tree 후위 순회]
  postorder(callback) {
    if (this.left) {
      this.left.postorder(callback);
    }
    if (this.right) {
      this.right.postorder(callback);
    }
    callback(this.value);
  }
}
