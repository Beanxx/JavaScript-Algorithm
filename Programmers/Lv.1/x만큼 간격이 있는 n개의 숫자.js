// 복습완료💫(221117)
// 2022.07.04(Mon)
// x만큼 간격이 있는 n개의 숫자.js

function solution(x, n) {
  let result = [];
  for (let i = 1; i <= n; i++) {
    // n개의 원소를 생성해야 하므로 n번 반복
    result.push(x * i);
  }
  return result;
}

// 조건식은 평소 쓰던대로 작성한 후,
// push할 때 +가 아닌 *를 해주면 쉽게 해결 가능!
// x=2, n=5일 때, [2,4,6,8,10] 값이 반환되어야 하는데
// 이는 [x*1, x*2, x*3, x*4, x*5]를 의미함과 같으므로 x*i로 처리 가능하다.(i가 1부터 시작하는 이유!)

// -----------------------------------------------

// other way
function solution(x, n) {
  return Array(n)
    .fill(x)
    .map((el, idx) => el * (idx + 1));
  // x부터 시작하는 el 값에 +1씩 증가하는 index를 곱해준 값을 배열의 원소로!
  // Array(n).fill(x): [ 2, 2, 2, 2, 2 ]
}

// Array(n).fill(x): n개의 길이만큼의 배열을 x로 시작하는 값으로 채움.

console.log(solution(2, 5)); // [2, 4, 6, 8, 10]
