// 복습완료💫(221106)
// 2022.10.20(Thurs)

// my way
function solution(sides) {
  sides.sort((a, b) => b - a); // 내림차순 -> [6, 3, 2]

  // sides[0]: 가장 긴 변
  if (sides[0] < sides[1] + sides[2]) return 1;
  else return 2;

  // return (sides[0] < sides[1] + sides[2]) ? 1 : 2;
  // => 삼항 연산자로 코드를 더 간결하게 줄일 수 있음!
}

// 241119
function solution(sides) {
  const [a, b, c] = sides.sort((x, y) => x - y); // c가 제일 긴 변

  if (c < a + b) return 1;
  return 2;
}

console.log(solution([3, 6, 2])); // 2
