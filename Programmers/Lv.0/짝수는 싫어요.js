// 2022.10.10(Mon)

function solution(n) {
  let answer = [];
  for (let i = 1; i < n + 1; i += 2) {
    answer.push(i);
  }
  return answer;
}

// for문 증감문에서 i+2 이렇게 써서 에러났었다..;
