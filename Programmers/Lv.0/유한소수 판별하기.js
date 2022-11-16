// 복습완료💫(221116)
// 2022.10.28(Fri)

// my way
function solution(a, b) {
  let result = [];

  // 먼저 기약분수로 만들기
  for (let i = 2; i <= Math.max(a, b); i++) {
    // 분모, 분자 모두 나누어 떨어지는 수 i로 나눠서 기약 분수로 만든다.
    if (a % i === 0 && b % i === 0) {
      a /= i;
      b /= i;
    }
  }

  // newB를 위의 for문 전에 선언하면 기약분수로 만들기 전의 b값이 newB에 할당되므로 for문 이후에 선언해주기!
  let newB = b; // 마지막에 기약분수였을 떄의 b를 활용할 것이므로 b 복제본 newB를 활용하여 풀기

  // b복제본 newB가 2로 나누어 떨어지는 동안 반복
  while (newB % 2 === 0) {
    result.push(2);
    newB /= 2;
  }

  // 위에서 2로 나눠질 때까지 나누고, 5로 나눌 수 있으면 5로 나눠질 때까지 나누기
  while (newB % 5 === 0) {
    result.push(5);
    newB /= 5;
  }

  result = result.reduce((acc, cur) => acc * cur, 1);

  // ex. 20 = 2 x 2 x 5 => result = 20이랑 기약분수의 분모 b 20과 비교하여 같으면 2와 5만으로 나눠진다는거니까 return 1
  // ex. 6 = 2 x 3 => result = 2랑 b 6과 비교하여 다르므로 2와 5가 아닌 다른 수로 나눠진다는거니까 return 2

  return result === b ? 1 : 2;
}

// 풀다 보니까 엄청 길어졌다,,, 이 문제도 오래걸림;
// 복습하면서 코드 최대한 줄여봄!

// ---------------------------------------------------------------------

// other way 1

function solution(a, b) {
  let n = 1;

  // 기약 분수로 만들기
  for (let i = 1; i <= Math.min(a, b); i++) {
    if (a % i === 0 && b % i === 0) n = i;
  }

  // 기약 분수의 분모로 만들기
  b /= n;

  while (b % 2 === 0) b /= 2;
  while (b % 5 === 0) b /= 5;

  // 기약분수 b를 활용해서 1이 된다는것은 2와 5로만 나눠진다는거니까 return 1
  return b === 1 ? 1 : 2;
}

console.log(solution(7, 20)); // 1
