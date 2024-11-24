// 복습완료💫(221116)
// 2022.10.27(Thurs)

// my way
// 조건: 가장 긴 변의 길이는 다른 두 변의 길이의 합보다 작아야 합니다.
function solution(sides) {
  let answer = [];
  let max = Math.max(sides[0], sides[1]);
  let min = Math.min(sides[0], sides[1]);

  // 가장 긴 변이 sides 내에 있는 경우
  for (let i = 1; i <= max; i++) {
    // i, 즉 sides에 담기지 않은 다른 변이 max보다 크면 안되며, 주어진 조건을 만족하는 경우
    if (max >= i && max < min + i) answer.push(i);
  }

  // sides에 담기지 않은 나머지 한 변이 가장 긴 변이 될 경우
  for (let i = max; i < max + min; i++) {
    // sides에 담긴 max보다 i가 더 길어야 하며, 주어진 조건을 만족하는 경우
    if (max < i && i < max + min) answer.push(i);
  }

  return answer.length;
}

// 241124
function solution(sides) {
  const [a, b] = sides.sort((a, b) => b - a);
  let c = 1;
  let result = 0;

  // c가 제일 긴 경우 & a가 제일 긴 경우 2가지를 고려해서 풀어야 한다
  while (c < a + b || b + c < a) {
    if ((c < a + b && c >= a) || (a < c + b && c <= a)) {
      result++;
    }
    c++;
  }

  return result;
}

// other way
function solution(sides) {
  return Math.min(...sides) * 2 - 1;
}
// 이게 머시여,, 뭔가 공식을 알아야 구현할 수 있는 코드 'o'

console.log(solution([11, 7])); // 13
