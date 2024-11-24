// 241124 다시 풀어야 하는 이유: for문 조건을 수정해나가면서 테스트케이스에 맞춰서 어부지리로 통과한 느낌이라 다시 풀어볼 필요 있음
// 복습완료💫(221108)
// 2022.10.17(Mon)

function solution(numbers, k) {
  // answer는 던지는 사람의 번호를 의미!
  let answer = -1;
  // 1번째로 던진 사람은 무조건 1번이 되어야 하므로 -1+2=1이 되도록 초기값을 -1로 할당

  for (let i = 0; i < k; i++) {
    answer += 2;
    // 던지는 사람의 번호가 numbers 배열의 크기보다 크면 안된다
    // answer는 2씩 증가하므로 배열길이보다 커진다면 배열길이+1만큼 커질 것이다
    // 클 경우엔 다시 1번으로 돌아가야 하기 떄문에 배열의 크기만큼 빼주는 것!
    if (answer > numbers.length) answer -= numbers.length;
    // 예를 들어 answer: 1 -> 3 -> 5 가 될텐데 배열 길이 4보다 5가 +1 만큼 크므로 5 - 4(배열길이) = 1로 돌아가기
  }
  return answer;
}

// 241124
function solution(numbers, k) {
  let result = 1; // 첫번째는 무조건 배월 원소의 첫번째 값인 1이 차지하므로 1 할당

  for (let i = 1; i < k; i++) {
    result += 2;

    if (result > numbers.length) {
      result -= numbers.length;
    }
  }

  return result;
}

console.log(solution([1, 2, 3, 4], 2)); // 3
console.log(solution([1, 2, 3], 5)); // 3 (edge case)
