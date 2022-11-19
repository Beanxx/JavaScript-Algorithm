// 복습완료💫(221119)
// 2022.10.08(Sat)
// Summer/Winter Coding(~2018)_Lv.1
// 소수 만들기.js

// 소수 판별 함수
function isPrime(n) {
  // 2로 나눠진다는 것은 소수가 아님을 의미
  if (n % 2 === 0) return false;

  // 위에서 짝수로 나눠지는 경우를 제외했으므로 i는 3부터 홀수만!
  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    // i로 나눠진다는 것은 소수가 아님을 의미
    if (n % i === 0) return false;
  }
  // 위의 조건들을 만족하지 않으면 소수라는 것이므로 true 반환
  return true;
}

function solution(nums) {
  let sum = 0;
  let result = 0;

  // 3개의 수를 더해야 하므로 for문 삼중첩
  // 서로 다른 수여야 하므로 범위 설정할 때 겹치지 않도록 최소한의 순회를 돌도록 설정하기
  // numbers.length: 5
  // i: 0 1 2
  // j: 1 2 3
  // k: 2 3 4
  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        sum = nums[i] + nums[j] + nums[k];
        // 3개의 수를 더한 값이 소수이면 result +1;
        if (isPrime(sum)) result++;
      }
    }
  }
  return result;
}

// 첨에 for문에서 i, j, k 초기값이랑 범위 설정하는걸 잘못해서 계속 중복되는 원소들을 뽑아서 통과가 안됐었다,,

console.log(solution([1, 2, 7, 6, 4])); // 4
