// first try - 2022.04.28(Thurs)
// second try - 2022.06.27(Mon)

// Q: 수(num)를 입력받아 1을 포함하여 num개의 홀수로 구성된 문자열을 리턴해야 합니다.

// * 조건 *
// while 반복문 사용해야 함

function makeOddDigits(num) {
  let n = 1; // 1부터 2씩 증가하면 홀수만 나오므로 1을 초기값으로 할당
  let count = 0; // 반복 횟수
  let result = "";

  while (count < num) {
    // count가 0부터 시작하므로 num 전까지 반복
    result += String(n);
    n += 2; // odd
    count += 1;
  }
  return result;
}
