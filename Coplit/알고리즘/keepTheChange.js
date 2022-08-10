// Greedy Algorithm - 거스름돈
// 2022.08.10(Wed)

function keepTheChange(input) {
  // 거스름돈
  // 1000엔을 지불했다는 가정 존재
  let change = Number(1000 - input);
  let count = 0;

  // 잔돈으로 줄 동전 단위를 배열에 저장
  const joiCoins = [500, 100, 50, 10, 5, 1];

  // 위의 배열 크기만큼 반복
  for (let i = 0; i < joiCoins.length; i++) {
    // 거스름돈이 0원이 되면 순회 멈춤
    if (change === 0) {
      break;
    }

    // 쓰인 잔돈 개수 카운팅
    count += Math.floor(Number(change / joiCoins[i]));
    // 나머지 재할당
    change %= joiCoins[i];
  }

  return count;
}

console.log(keepTheChange(380)); // 4
console.log(keepTheChange(1)); // 15
