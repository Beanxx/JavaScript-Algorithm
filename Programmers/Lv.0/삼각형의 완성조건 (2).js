// 2022.10.27(Thurs)

// my way
function solution(sides) {
  let answer = [];
  let max = Math.max(sides[0], sides[1]);
  let min = Math.min(sides[0], sides[1]);

  // 가장 긴 변이 sides 내에 있는 경우
  for (let i = 1; i <= max; i++) {
    if (max >= i && max - min < i) {
      answer.push(i);
    }
  }

  // 나머지 한 변이 가장 긴 변이 될 경우
  for (let i = max; i < max + min; i++) {
    if (max < i && max + min > i) {
      answer.push(i);
    }
  }

  return answer.length;
}

// other way
function solution(sides) {
  return Math.min(...sides) * 2 - 1;
}

// 이게 머시여,, 뭔가 공식을 알아야 구현할 수 있는 코드 'o'
