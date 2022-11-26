// 2022.11.26(Sat)
// 완전탐색 > 모의고사.js

// 완전탐색: 가능한 모든 경우의 수를 다 체크해서 정답을 찾는 방법

function solution(answers) {
  let answer = [];
  const a = [1, 2, 3, 4, 5];
  const b = [2, 1, 2, 3, 2, 4, 2, 5];
  const c = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  // 각 정답을 맞춘 개수
  let countA = 0;
  let countB = 0;
  let countC = 0;
  let count = [];

  for (let i = 0; i < answers.length; i++) {
    // a, b, c 배열의 값이 반복문이 끝날 때까지 순회되어야 하므로 배열 길이만큼 나눈 나머지를 index로!
    // 각 정답을 맞출 떄마다 +1
    if (answers[i] === a[i % a.length]) countA++;
    if (answers[i] === b[i % b.length]) countB++;
    if (answers[i] === c[i % c.length]) countC++;
  }

  count.push(countA, countB, countC); // 배열에 a, b, c 순으로 저장
  let max = Math.max(...count); // 배열 값 중 최댓값 할당

  // 최댓값에 해당하는 원소가 여러 개일 수도 있으므로 3명만큼 반복문 순회하기
  for (let i = 0; i < 3; i++) {
    // 최댓값과 원소 값이 같으면 answer에 push
    if (count[i] === max) answer.push(i + 1);
  }

  return answer;
}
// 난 너무 변수 선언을 많이 한 느낌,, 굳이 countA, countB, countC 요렇게 선언 안하고,
// 아래 다른 사람 풀이처럼 바로 count 배열에 넣으면 더 good~!

// ------------------------------------------------------------

// other way
function solution(answers) {
  let answer = [];
  const a = [1, 2, 3, 4, 5];
  const b = [2, 1, 2, 3, 2, 4, 2, 5];
  const c = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  let count = [0, 0, 0]; // a, b, c 순으로 정답 맞춘 개수 할당하기

  for (let i = 0; i < answers.length; i++) {
    if (answers[i] == a[i % a.length]) count[0]++;
    if (answers[i] == b[i % b.length]) count[1]++;
    if (answers[i] == c[i % c.length]) count[2]++;
  }

  const max = Math.max(count[0], count[1], count[2]);

  for (let i = 0; i < 3; i++) {
    if (max === count[i]) answer.push(i + 1);
  }

  return answer;
}

console.log(solution([1, 2, 3, 4, 5])); // [1]
console.log(solution([1, 3, 2, 4, 2])); // [1, 2, 3]
