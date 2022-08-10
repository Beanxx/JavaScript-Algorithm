// [Greedy] 편의점 알바.js
// 2022.08.10(Wed)

function partTimeJob(k) {
  let count = 0;
  // 거스름돈으로 줄 동전 단위를 배열에 저장
  let coins = [500, 100, 50, 10, 5, 1];

  // 위의 동전 단위 배열 크기만큼 반복
  for (let i = 0; i < coins.length; i++) {
    // 거스름돈 0원이 되면 반복 끝내기
    if (k === 0) {
      break;
    }
    // 쓰인 거스름돈 개수 카운팅
    count += Math.floor(Number(k / coins[i]));
    // 남은 잔돈 재할당해주기
    k %= coins[i];
  }
  return count;
}

console.log(partTimeJob(4000)); // 8
console.log(partTimeJob(4972)); // 18
