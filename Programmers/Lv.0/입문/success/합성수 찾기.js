// 복습완료💫(221116)

// 합성수: 약수의 개수가 3개 이상인 수
function solution(n) {
  let result = 0;

  // 합성수 판별 함수 (소수 판별 함수와 유사한 방법으로 구현!)
  const isPrime = (num) => {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      // num이 뭐라도 나눠지는게 있으면 소수가 아닌 합성수!
      if (num % i === 0) return true;
    }
    return false;
  };

  for (let i = 1; i <= n; i++) {
    // 합성수라면 result + 1
    if (isPrime(i) === true) result++;
  }

  return result;
}

// 241120
function solution(n) {
  let result = 0;

  for (let i = 4; i <= n; i++) {
    // 각 숫자별 합성수인지 판별
    for (let j = 2; j < i; j++) {
      // 1과 자신을 제외한 나머지 수로 나누어 떨어진다면 약수가 3개 이상이므로 합성수!
      if (i % j === 0) {
        result++;
        break;
      }
    }
  }

  return result;
}

// other way
function solution(n) {
  let answer = new Set();

  for (let i = 1; i <= n; i++) {
    // 1, i 자신은 제외한 그 사이의 수로 i를 나눔으로써 나누어 떨어진다면 합성수!
    for (let j = 2; j < i; j++) {
      if (i % j === 0) answer.add(i);
    }
  }

  return answer.size; //answer 집합 원소의 개수 반환
}

// set() 객체: 중복을 제거한 값들의 집합
// .add(): 특정 요소 추가
// .size: 요소 개수 반환

console.log(solution(10)); // 5
