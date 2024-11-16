// 2024.11.16(Sat)

function solution(n, m, section) {
  let result = 0; // 덧칠 횟수
  let painted = 0; // 덧칠시 덧칠해진 마지막 위치

  for (let el of section) {
    if (painted < el) {
      result++;
      painted = el + m - 1; // 처음부터 덧칠을 시작한다고 했을 때 마지막으로 칠해진 위치를 저장해놓고 이후에는 그 다음 위치부터 덧칠을 시작한다
    }
  }

  return result;
}

// 문제는 이해가 되었지만 덧칠을 어떻게 접근해서 풀어야 할지 많은 시간 헤맸던 문제..

console.log(solution(8, 4, [2, 3, 6])); // 2
console.log(solution(5, 4, [1, 3])); // 1
console.log(solution(4, 1, [1, 2, 3, 4])); // 4
