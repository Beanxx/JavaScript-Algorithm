// [Greedy] 짐 나르기.js
// 2022.08.10(Wed)

function movingStuff(stuff, limit) {
  // stuff: [70, 50, 80, 50]
  // sortedStuff: [50, 50, 70, 80]
  let sortedStuff = stuff.sort((a, b) => a - b);

  // stuff 배열 값들을 내림차순으로 정렬한 배열인 sortedStuff에서의 max, min 배열
  let min = 0; // 배열 맨 앞이 제일 작은 값이므로 index=0
  let max = sortedStuff.length - 1; // 배열 맨 뒤가 제일 큰 값이므로

  let count = 0;

  for (let i = 0; min <= max; i++) {
    if (sortedStuff[min] + sortedStuff[max] > limit) {
      max--; // index를 하나씩 줄여감
      count++;
    } else {
      min++; // limit을 넘지 않으면 index=0에서 다음 index로 하나씩 이동시키기
      max--;
      count++;
    }
  }
  return count;
}

console.log(movingStuff([70, 50, 80, 50], 100)); // 3
console.log(movingStuff([60, 80, 120, 90, 130], 140)); // 4
