// 복습완료💫(221116)
// 2022.10.26(Wed)

function solution(dots) {
  let x = [];
  let y = [];

  for (let el of dots) {
    x.push(el[0]); // x좌표들만 저장 ->	[ -1, 1, 1, -1 ]
    y.push(el[1]); // y좌표들만 저장 -> [ -1, 1, -1, 1 ]
  }

  // Math.max 메소드를 배열에 사용할 땐 spread 연산자와 함께 사용하기
  x = Math.max(...x) - Math.min(...x); // 1 - (-1) = 2
  y = Math.max(...y) - Math.min(...y); // 1 - (-1) = 2

  return x * y;
}

console.log(
  solution([
    [-1, -1],
    [1, 1],
    [1, -1],
    [-1, 1],
  ])
); // 4
