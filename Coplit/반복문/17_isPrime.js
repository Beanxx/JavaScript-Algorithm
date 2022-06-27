// first try - 2022.04.28(Thurs)
// second try - 2022.06.27(Mon)

// Q: 1 이상의 자연수를 입력받아 소수(prime number)인지 여부를 리턴해야 합니다.

function isPrime(num) {
  if (num === 1) {
    return false;
  }
  if (num === 2) {
    return true;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

// 소수: 1과 자기 자신 이외에는 자연수로 나눌 수 없는, 대신 1보다 커야 함.
// 1. 1보다는 커야 함
// 2. 짝수 제외(단, 2는 소수)
// 3. 3부터 자기 자신보다 작은 수까지 나누어 떨어지는 경우가 단 한 차례라도 있으면 그건 소수가 아님
// num을 (3~num)으로 나누어서 나머지가 0인게 하나라도 있으면, 소수가 아님.

// + 반복을 조금 더 덜 하는 방법 -> 제곱근(Math.sqrt())으로 나눠서 떨어진다면? -> 그럼 이미 소수가 아님.
