// 복습완료💫(221119)
// 2022.07.09(Satur)
// 최대공약수와 최소공백수.js

// my way
function solution(n, m) {
  let result = [];
  let minNum = 1; // 최대공약수

  for (let i = 2; i <= m; i++) {
    // n, m 모두 나누어 떨어지게 하는 수가 최대공약수
    if (n % i === 0 && m % i === 0) minNum = i;
  }
  let maxNum = (n * m) / minNum; // 최소공배수
  result.push(minNum, maxNum);
  return result;
}

// 처음에 만약 (2, 5)의 최대공약수는 1일 때 이를 따로 처리해줬는데 test에선 통과되지만 막상 제출하면 실패 와다다..
// 그래서 최대공약수는 변수에 따로 1로 저장해두고 for문 내의 if문을 만족하지 않으면 고대로 초기값인 1를 출력하도록 했다.
// 최소공배수는 두 수를 곱한 값을 최대공약수로 나눈 값과 같으므로 (n * m) / minNum 요렇게 처리!

// --------------------------------------------------------------

// other way (유클리드 호제법)

// 최대공약수 구하는 함수 (재귀함수 사용)
// 나누어 떨어질 때까지 서로를 나눈 나머지를 계속 나눠주는 함수
function getMin(a, b) {
  let r = a % b;
  return b ? getMin(b, r) : a;
  // b가 truthy값이라는 것은 나누어 떨어지지 않는다는 의미이므로 계속 getMin() 함수 실행
  // a를 b로 나눈 나머지를 r이라고 한다면, a와 r의 최대공약수는 b와 r의 최대공약수와 같다.
  // 이 성질에 따라 b를 r로 나눈 나머지 r2를 구하고, 다시 r을 r2로 나눈 나머지를 구하는 과정을 반복하여 나머지가 0이 되었을 때 나누는 수가 최대공약수!
}

// 최소공배수 구하는 함수
function getMax(a, b) {
  return (a * b) / getMin(a, b);
}

function solution(n, m) {
  // 최대공약수, 최소공배수를 차례대로 배열에 넣어줌
  return [getMin(n, m), getMax(n, m)];
}

// 유클리드 호제법이란걸 이용해서 푸는 다른 사람의 풀이쓰
// 유클리드 호제법이란? 두 수의 최대공약수를 구하는 알고리즘!

console.log(solution(2, 5)); // [1, 10]
