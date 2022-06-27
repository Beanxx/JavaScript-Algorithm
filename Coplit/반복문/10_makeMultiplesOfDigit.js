// first try - 2022.04.28(Thurs)
// second try - 2022.06.27(Mon)

// Q: 두 개의 수를 입력받아 두 수를 포함해 두 수 사이의 수 중 2의 배수의 개수를 리턴해야 합니다.

// * 조건 *
// num1이 num2보다 작지 않을 수도 있음
// 0은 2의 배수가 아니라고 가정

function makeMultiplesOfDigit2(num1, num2) {
  let count = 0;
  let start = Math.min(num1, num2); // num1, num2 중 작은 수를 시작 숫자로
  let end = Math.max(num1, num2); // num1, num2 중 큰 수를 끝나는 숫자로

  if (start === 0) {
    start = 1; // ->  start를 1로 바꾸는 이유: 그래야 0을 2의 배수로 세지 않으므로.
  }

  // i는 start~end
  for (let i = start; i <= end; i++) {
    if (i % 2 === 0) {
      // 만약 위에서 start가 0일 때 1로 바꾸지 않았다면 0 % 2 === 0 이 성립하므로 0도 2의 배수로 count.
      count += 1;
    }
  }
  return count;
}
