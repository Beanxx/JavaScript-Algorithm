// 2022.10.08(Sat)
// Summer/Winter Coding(~2018)_Lv.1
// 소수 만들기.js

// 소수 판별 함수
function isPrime(n) {
  if (n % 2 === 0) {
    return false;
  }

  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}

function solution(nums) {
  let sum = 0;
  let result = 0;

  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        sum = nums[i] + nums[j] + nums[k];

        if (isPrime(sum)) {
          result++;
        }
      }
    }
  }
  return result;
}

// 첨에 for문에서 i, j, k 초기값이랑 범위 설정하는걸 잘못해서 계속 중복되는 원소들을 뽑아서 통과가 안됐었다,,
