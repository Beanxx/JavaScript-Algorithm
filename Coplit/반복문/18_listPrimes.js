// first try - 2022.04.28(Thurs)
// second try - 2022.06.27(Mon)

// Q: 2 이상의 자연수를 입력받아 2부터 해당 수까지의 소수(prime number)들을 리턴해야 합니다.

// * 조건 *
// 이중 반복문 사용해야 함

// 첫번째 즉, 밖 for문: 문자열을 출력해주는 역할 (일단 홀수들)
// 두번째 즉, 안 for문: 각 숫자가 소수인지 판별해주는 역할 (num까지의 홀수들 중 소수)
// 그래서 안 for문에서 소수인지 판별한 후, 소수라면 밖 for문에서 소수들을 형식에 맞춰서 result에 저장

function listPrimes(num) {
  let result = "2"; // 무조건 2부터 시작하므로 초기값을 2로 할당
  for (let i = 3; i <= num; i += 2) {
    // i +=2 의미는 3부터 2씩 증가하면 홀수를 의미함 (짝수는 무조건 2로 나눠지므로 소수가 아님)
    let sosu = true; // 소수라면 true, 아니면 false
    for (let j = 3; j < i; j += 2) {
      // 조건식이 j < i 인 이유는 j <= i일 경우 자기 자신을 나눠버리는 경우에 아래 if문 조건에 맞아서 소수가 아닌걸로 판별
      // 예를 들어서 9는 3으로 나눠떨어지므로 소수가 아님
      if (i % j === 0) {
        // 위에서 j += 2 또한 2씩 증가시키는 이유는 밖 for문에서 이미 홀수만 있기 때문에 홀수는 어떠한 짝수로도 나눠지는 경우가 없으므로 홀수를 나누는 수 또한 홀수!
        sosu = false;
        break;
      }
    }
    if (sosu) {
      // 소수라면
      result += `-${i}`;
    }
  }
  return result;
}

// 이중 반복문 로직 생각하는게 아직도 어렵다..
