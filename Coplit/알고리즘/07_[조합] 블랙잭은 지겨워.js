// [조합] 블랙잭은 지겨워.js
// 2022.08.11(Thurs)

function boringBlackjack(cards) {
  let count = 0;

  // 조합 구하는 로직 (반복 조건 주의~!)
  for (let i = 0; i < cards.length; i++) {
    for (let j = i + 1; j < cards.length; j++) {
      for (let k = j + 1; k < cards.length; k++) {
        // 3개의 카드 합을 result 변수에 할당
        let result = cards[i] + cards[j] + cards[k];

        // 소수이면 count +1씩 증가
        if (isPrime(result)) {
          count++;
        }
      }
    }
  }

  // 소수 판별 함수
  function isPrime(sum) {
    for (let i = 2; i <= Math.sqrt(sum); i++) {
      // sum이 어떠한 수로 나누어 떨어지면 소수가 아니므로 false
      if (sum % i === 0) {
        return false;
      }
    }
    return true; // 소수
  }

  return count;
}

console.log(boringBlackjack([1, 2, 3, 4])); // 1
console.log(boringBlackjack([2, 3, 4, 8, 13])); // 3
