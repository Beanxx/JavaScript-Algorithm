// 복습완료💫(221108)
// 2022.10.16(Sun)

// 서로 다른 n개 중 m개를 뽑는 경우의 수: n!/(n-m)! x m! 공식 활용해서 풀기
function solution(balls, share) {
  let answer = 0;
  let top = BigInt(1); // 분모
  let bottom1 = BigInt(1); // 분자1
  let bottom2 = BigInt(1); // 분자2

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

// 241124
function solution(balls, share) {
  let nFac = 1;
  let mFac = 1;
  let nmFac = 1;

  for (let i = 2; i <= balls; i++) nFac *= i;
  for (let j = 2; j <= share; j++) mFac *= j;
  for (let k = 2; k <= balls - share; k++) nmFac *= k;

  return Math.round(nFac / (nmFac * mFac));
}

// other way
// 재귀함수 활용
const factorial = (num) => (num === 0 ? 1 : num * factorial(num - 1));

function solution(balls, share) {
  return Math.round(
    factorial(balls) / (factorial(balls - share) * factorial(share))
  );
}
