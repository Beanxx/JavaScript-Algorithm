// 01_[Stack] 구현.js
// 2022.08.12(Fri)

class Stack {
  // stack constructor 생성
  constructor() {
    this.storage = {};
    this.top = 0;
  }

  // [stack 사이즈 구하기]
  // this.top = 스택에 새롭게 추가될 요소의 인덱스를 나타냄. (0~ +1 => 전체 요소 개수 나타낼 수 있음)
  // this.top => 스택이 쌓일 때마다 하나씩 증가하기 때문에 top으로 size를 구할 수 있음
  size() {
    return this.top;
  }

  // [stack에 element 추가]
  push(element) {
    // key = this.top, value = element(요소) => storage에 할당
    this.storage[this.top] = element;
    // this.top -> 다음 인덱스를 가리키게 하여 새로운 요소에 대비
    this.top += 1;
  }

  // [stack에서 element를 제거한 뒤 해당 element 반환]
  pop() {
    // 사이즈가 0 즉, 빈 스택이라면 아무 일도 일어나지 않음
    if (this.size() === 0) {
      return;
    }

    // top-1로 최상단 설정 후, result 변수에 저장하고,
    const result = this.storage[this.top - 1];

    // stack에서 삭제
    delete this.storage[this.top - 1];

    // 하나 제거했으므로 top도 -1 감소
    this.top -= 1;

    return result;
  }
}
