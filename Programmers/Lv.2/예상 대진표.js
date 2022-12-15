// // 2022.12.15(Thurs)
// 예상 대진표.js

// my way
function solution(n, a, b) {
  let answer = 0;

  // n이 1보다 클 때 즉, n이 1이 될 때까지 반복문 순회
  while (n > 1) {
    answer++;
    n /= 2; // 다음 라운드로 올라갈 때마다 n이 절반으로 줄음
    a = Math.ceil(a / 2); // 다음 라운드에서 4번 참가자는 2번이 되고, 7번 참가자는 4번이 된다.
    b = Math.ceil(b / 2); // 즉, 2로 나눈 몫을 올림한 값이 다음 라운드에서의 순번이 되는 것!
    if (a === b) break; // a, b 순번이 같아지면 즉, 같은 라운드에서 만나게 되면 break로 반복 끝내기!
  }
  return answer;
}
// Math.ceil(): 올림
// (1, 2) (3, 4) (5, 6) (7, 8)
// (1|2, 4) (5|6, 7)
// (4) (7)
// (4|7)

// --------------------------------------------------------------------------

// other way
function solution(n, a, b) {
  let answer = 0;

  while (a !== b) {
    a = Math.ceil(a / 2);
    b = Math.ceil(b / 2);
    answer++;
  }

  return answer;
}
// 애초에 while 조건문을 a와 b가 같지 않을 때 동안 반복문을 순회하는걸로 해주면
// while문 안에서 따로 if문을 작성하지 않아도 된다!

console.log(solution(8, 4, 7)); // 3
