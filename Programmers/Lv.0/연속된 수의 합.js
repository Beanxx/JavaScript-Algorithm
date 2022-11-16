// 복습완료💫(221116)
// 2022.10.31(Mon)

function solution(num, total) {
  let answer = [];

  let base = parseInt(total / num); // parseInt(3/6) = 0
  let odd = base - parseInt(num / 2); // 0 - parseInt(3 / 2) = 0 - 1 = -1

  // num이 짝수일 때
  // ex) num: 6, total: 3
  if (num % 2 === 0) {
    // base - num/2 +1 = 0 - 3 + 1 = -2부터 시작해서
    // base + num/2 = 0 + 3 = +3까지
    for (let i = base - num / 2 + 1; i <= base + num / 2; i++) {
      answer.push(i);
    }
  } else {
    // num이 홀수일 때
    // ex) num: 3, total: 0
    // odd = -1부터 시작해서 -1 + 3 -1 = 1까지
    for (let i = odd; i <= odd + num - 1; i++) {
      answer.push(i);
    }
  }
  return answer;
}

console.log(solution(6, 3)); // [-2, -1, 0, 1, 2, 3]
console.log(solution(3, 0)); // [-1, 0, 1]

// -----------------------------------------------------------

// fail code...
function solution(num, total) {
  let answer = [];
  let temp = parseInt(total / num);
  let sum = 0;

  if (total === 0) answer.push(total);
  // num이 홀수일 때
  else if (num % 2 === 1) answer.push(temp);
  // num이 짝수일 때
  else if (num % 2 === 0) {
    answer.push(temp);
    answer.push(temp + 1);
  }

  for (let i = 1; i <= num; i++) {
    sum = answer.reduce((acc, cur) => acc + cur, 0);

    if (total === 0) {
      answer.push(temp + i);
      answer.push(temp - i);
      if (answer.length === num) return answer.sort((a, b) => a - b);
    } else {
      if (sum !== total) {
        answer.push(temp - i);
        if (num % 2 === 1) answer.push(temp + i);
        else answer.push(temp + 1 + i);
      } else return answer.sort((a, b) => a - b);
    }
  }
}

// 첨엔 이렇게 장황한 코드로 짰는데 계속 테스트 7번만 통과가 안되서 다른 사람 방식으로..
