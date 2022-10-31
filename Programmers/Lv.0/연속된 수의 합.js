// 2022.10.31(Mon)

function solution(num, total) {
  let answer = [];

  let normal = parseInt(total / num);
  let odd = normal - parseInt(num / 2);

  // num이 짝수일 때
  if (num % 2 === 0) {
    for (let i = normal - num / 2 + 1; i <= normal + num / 2; i++) {
      answer.push(i);
    }
  } else {
    // num이 홀수일 때
    for (let i = odd; i < odd + num; i++) {
      answer.push(i);
    }
  }
  return answer;
}

// -----------------------------------------------------------

// fail code..
function solution(num, total) {
  let answer = [];
  let temp = parseInt(total / num);
  let sum = 0;

  if (total === 0) {
    // total이 0일 때
    answer.push(total);
  } else if (num % 2 === 1) {
    // num이 홀수일 때
    answer.push(temp);
  } else if (num % 2 === 0) {
    // num이 짝수일 때
    answer.push(temp);
    answer.push(temp + 1);
  }

  for (let i = 1; i <= num; i++) {
    sum = answer.reduce((acc, cur) => acc + cur, 0);

    if (total === 0) {
      answer.push(temp + i);
      answer.push(temp - i);

      if (answer.length === num) {
        return answer.sort((a, b) => a - b);
      }
    } else {
      if (sum !== total) {
        answer.push(temp - i);
        if (num % 2 === 1) {
          answer.push(temp + i);
        } else {
          answer.push(temp + 1 + i);
        }
      } else {
        return answer.sort((a, b) => a - b);
      }
    }
  }
}

// 첨엔 이렇게 장황한 코드로 짰는데 계속 테스트 7번만 통과가 안되서 다른 사람 방식으로..
