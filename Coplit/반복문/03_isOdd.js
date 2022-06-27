// first try - 2022.04.28(Thurs)
// second try - 2022.06.27(Mon)

// Q: 수를 입력받아 홀수인지 여부를 리턴해야 합니다.

// * 조건 *
// while 반복문 사용해야 함
// for문 사용 금지
// /, % 연산자 사용 금지

function isOdd(num) {
  if (num < 0) {
    num = -num; // 음수일 경우 '-'부호를 붙여서 양수로 만들어줌.
  }

  // num이 0이상일 때까지 반복
  while (num >= 0) {
    // num이 0일 경우 짝수로 가정 -> 홀수 x -> false
    if (num === 0) {
      return false;
    } else if (num === 1) {
      // 반복할 때마다 num을 2씩 줄여서 1에 도달하면 홀수라는 것이니까 true
      return true;
    }

    num -= 2;
    // 만약 짝수가 2씩 줄어가면 반복문에서 취급하는 제일 작은 수인 0에 도달 -> if문을 통해 0이면 false;
  }
}

// for문과 나머지 연산자 쓰면 쉽게 풀리는 문제지만 다 금지시켜서 어떻게 풀어야 할지 감이 안 잡혔달까..
// + while문 조건식을 뭐로 설정해야 하는지 좀 헷갈림
