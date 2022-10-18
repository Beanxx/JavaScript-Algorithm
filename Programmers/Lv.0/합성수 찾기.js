function solution(n) {
  let result = 0;

  // 합성수 판별 함수 (소수 판별 함수와 유사한 방법으로 구현!)
  const isPrime = (num) => {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      // num이 뭐라도 나눠지는게 있으면 소수가 아닌 합성수!
      if (num % i === 0) {
        return true;
      }
    }
    return false;
  };

  for (let i = 1; i <= n; i++) {
    if (isPrime(i) === true) {
      result++;
    }
  }

  return result;
}

// other way
function solution(n) {
  let answer = new Set();

  for (let i = 1; i <= n; i++) {
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        answer.add(i);
      }
    }
  }

  return answer.size;
}

// set() 객체: 중복을 제거한 값들의 집합
// .add(): 특정 요소 추가
// .size: 요소 개수 반환
