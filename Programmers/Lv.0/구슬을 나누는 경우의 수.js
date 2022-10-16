// 2022.10.16(Sun)

function solution(balls, share) {
  let answer = 0;
  let top = BigInt(1);
  let bottom1 = BigInt(1);
  let bottom2 = BigInt(1);

  for (let i = 1; i <= balls; i++) {
    top *= BigInt(i);
  }

  for (let i = 1; i <= share; i++) {
    bottom1 *= BigInt(i);
  }

  for (let i = 1; i <= balls - share; i++) {
    bottom2 *= BigInt(i);
  }

  answer = Number(top / (bottom1 * bottom2));
  return answer;
}

// 실행하면 맞긴 하는데 테스트 몇개가 통과가 안되서 찾아보니까 BigInt를 사용해야 한다구 한다,,
// BigInt: Number 원시 값이 안정적으로 나타낼 수 있는 최대치인 2^53 - 1보다 큰 정수를 표현할 수 있는 내장 객체
// 아마도 balls, share의 범위땜에 BigInt를 사용해야 통과가 되는듯..?
