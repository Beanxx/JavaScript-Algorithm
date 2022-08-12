// 02_[Queue] 구현.js
// 2022.08.12(Fri)

class Queue {
  //queue constructor 생성
  constructor() {
    this.storage = {};
    //가장 앞에 있는 요소 = front,
    this.front = 0;
    //가장 뒤에 있는 요소 = rear
    this.rear = 0;
  }

  // [queue 사이즈 구하기]
  // 추가될 땐 rear 값이 커지고, 삭제 될 땐 front 변경 => rear, front로 사이즈 구할 수 있음
  size() {
    return this.rear - this.front;
  }

  // [queue에 element 추가]
  enqueue(element) {
    // key = [this.rear], value = element(요소) => storage에 할당
    this.storage[this.rear] = element;
    // this.rear -> 다음 인덱스를 가리키게 하여 새로운 요소에 대비
    this.rear += 1;
  }

  // [queue에서 element를 제거 한 뒤 해당 element 반환]
  // 가장 먼저 추가된 데이터가 가장 먼저 추출!
  dequeue() {
    // 사이즈가 0 즉, 빈 스택이라면 아무 일도 일어나지 않음
    if (this.size() === 0) {
      return;
    }

    // front로 최상단 설정 후, result 변수에 저장하고,
    const result = this.storage[this.front];

    // queue에서 삭제
    delete this.storage[this.front];
    this.front += 1;

    return result;
  }
}
