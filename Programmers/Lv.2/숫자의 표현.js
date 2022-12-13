// // 2022.12.02(Fri)
// 숫자의 표현.js

// my way
function solution(n) {
  let answer = 1;
  // 아래 for문에서 n 전까지 순회하며, 자기 자신은 무조건 방법의 수로 치기 때문에 1로 초기화해주기

  for (let i = 1; i < n; i++) {
    let sum = i; // 연산 시작 숫자
    for (let j = i + 1; j < n; j++) {
      sum += j;
      if (sum === n) answer++;
      else if (sum > n) break; // n보다 sum이 크면 j 반복문 순회 끝내기
      // 위의 sum이 n보다 큰 경우를 고려하지 않으면 시간초과가 발생하므로 작성해줘야 함!
    }
  }
  return answer;
}

console.log(solution(15)); // 4
