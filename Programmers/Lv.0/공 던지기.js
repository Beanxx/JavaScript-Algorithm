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

console.log(solution([1, 2, 3, 4], 2)); // 3
