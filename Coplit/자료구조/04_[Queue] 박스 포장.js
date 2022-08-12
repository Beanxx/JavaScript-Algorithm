// 04_[Queue] 박스 포장.js
// 2022.08.12(Fri)

function paveBox(boxes) {
  let answer = [];

  // boxes 배열이 0보다 클 때까지 반복
  while (boxes.length > 0) {
    let finishIndex = boxes.findIndex((fn) => boxes[0] < fn);

    // 만약 index를 찾지 못했다면
    if (finishIndex === -1) {
      // answer에 boxes 배열의 길이를 넣은 후
      answer.push(boxes.length);

      // boxes 내부의 요소를 전부 삭제
      boxes.splice(0, boxes.length);
    } else {
      // 만약 찾았다면, 해당 인덱스를 answer에 넣고
      answer.push(finishIndex);

      // boxes에서 그만큼 제외하기
      boxes.splice(0, finishIndex);
    }
  }

  return Math.max(...answer);
  // spread 연산자 => 배열 전개 -> [1, 2, 3] => 1 2 3
}

console.log(paveBox([5, 1, 4, 6])); // 3
console.log(paveBox([1, 5, 7, 9])); // 1

// queue: 짝궁 loop: while
// 빈 배열 (큐 x <- 자른 배열 길이)
// 큐(대기열) <- push shift
// 대기열의 사이즈 <- while문을 멈춰야 하는 요소 : length

// 맨 처음의 박스를 먼저 찾은 다음에
// 그 박스를 가지고 뒤에 오는 요소들과 계속 비교

// 맨 처음 박스보다 더 큰 수를 만나면
// 배열을 잘라서 배열 길이를 재서, 길이
// 잘린 원본배열은 다시 조건에 맞춰서 돌아가야 되는 구조

// 큐(대기열)는 어떻게 시작하는걸 알고 어떻게 끝나는걸 알 수 있죠?
// 큐에 요소가 있으면 큐가 시작하는 걸, 큐에 요소가 없으면 큐가 끝나는걸

// 대기열 크기가 있냐 없냐로
