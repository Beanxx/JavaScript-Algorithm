// 2022.10.20(Thurs)

// my way
function solution(sides) {
  sides = sides.sort((a, b) => b - a);

  if (sides[0] < sides[1] + sides[2]) {
    return 1;
  } else {
    return 2;
  }
  // return (sides[0] < sides[1] + sides[2]) ? 1 : 2; <- 삼항 연산자로 코드를 더 간결하게 줄일 수 있음!
}
