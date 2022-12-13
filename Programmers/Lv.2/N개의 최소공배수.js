// // 2022.12.05(Mon)
// N개의 최소공배수.js

// 유클리드 호제법을 이용해 최대공약수를 구하는 로직
const gcd = (a, b) => {
  return a % b ? gcd(b, a % b) : b;
  // a % b 결과가 true이려면 a % b === 0이 아니여야 하므로 나누어 떨어지지 않을 때 재귀 실행
  // a % b === 0 => falsy값 => 나누어 떨어진다는 뜻이므로 이 땐 나누는 수인 b return
};

function solution(arr) {
  let answer = 1;
  for (let i = 0; i < arr.length; i++) {
    // 두 수만을 비교하는 것이 아니라 배열 내의 모든 원소의 최소공배수를 구해야 하므로
    // arr[i]와 결과값을 answer에 할당시켜 이 두 수를 가지고 비교해야 함
    // 아래 로직 또한 유클리드 호제법을 이용한 최소공배수 구하기 방법!
    answer = answer * (arr[i] / gcd(answer, arr[i]));
  }
  return answer;
}

console.log(solution([2, 6, 8, 14])); // 168
console.log(solution([1, 2, 3])); // 6

// 유클리드 호제법을 이용해 최소공배수를 구하는 로직
// function lcm(a, b) {
//   return a * (b / gcd(a, b));
// }
