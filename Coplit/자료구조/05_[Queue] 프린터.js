// 05_[Queue] 프린터.js
// 2022.08.12(Fri)

function queuePrinter(bufferSize, capacities, documents) {
  let count = 0;
  let queue = [];
  let totalBufferVolume = 0;

  // 가상의 대기열에 뭔가 들어있어야 while이 돌아가므로 뭔가를 넣어주는 것!
  // queue에 bufferSize만큼 0 삽입. (queue에 들어갈 요소의 고정 갯수를 만들어 주는 과정)
  for (let i = 0; i < bufferSize; i++) {
    queue.push(0);
  }

  // 프린터를 처음 실행했을 때
  // documents 배열에서 제일 앞의 있는 요소를 하나 빼내 currentDocument에 할당
  let currentDocument = documents.shift();

  // queue의 제일 앞에 currentDocument를 삽입하고,
  queue.unshift(currentDocument);
  // 제일 마지막 요소 제거
  queue.pop();

  // totalBufferVolume(총 용량)에 currentDocument의 크기를 합침
  totalBufferVolume += currentDocument;

  // 1초 지남을 의미
  count++;

  // totalBufferVolume(총 용량)가 0이 될 때까지 반복
  while (totalBufferVolume) {
    // totalBufferVolume(총 용량)에 queue의 마지막 요소의 용량 제거
    totalBufferVolume -= queue.pop();

    // documents 배열에서 제일 앞의 있는 요소를 하나 빼내 currentDocument에 할당
    currentDocument = documents.shift();

    // 만약 현재 문서와 총 용량을 더했을 때, 최대 용량(capacities)보다 작거나 같다면
    if (currentDocument + totalBufferVolume <= capacities) {
      // queue에 currentDocument를 삽입하고
      queue.unshift(currentDocument);
      // totalBufferVolume(총 용량)에 currentDocument 용량 추가
      totalBufferVolume += currentDocument;

      // 만약 현재 문서와 총 용량을 더했을 때, 최대 용량(capacities)보다 크다면
    } else {
      // 다시 documents에 currentDocument를 집어넣고
      documents.unshift(currentDocument);
      // queue에 0 삽입
      queue.unshift(0);
    }

    // 한 번 반복할 때마다 count(초) +1
    count++;
  }
  return count;
}

console.log(queuePrinter(2, 10, [7, 4, 5, 6])); // 8
