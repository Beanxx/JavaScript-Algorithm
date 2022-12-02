// // 2022.12.02(Fri)
// 최솟값 만들기.js

// my way
function solution(A, B) {
  let answer = 0;
  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);

  for (let i = 0; i < A.length; i++) {
    answer += A[i] * B[i];
  }
  return answer;
}
// A = [1, 2], B = [3, 4] 일 때 A에서 최소값, B에서 최대값을 서로 곱해야 연산 결과가 최솟값이 나오므로
// A는 오름차순 정렬, B는 내림차순 정렬해줘서 같은 index에 있는 값들끼리 곱해주기

// other way
function solution(A, B) {
  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);

  return A.reduce((acc, cur, i) => acc + cur * B[i], 0);
}

console.log(solution([1, 2], [3, 4])); // 10
