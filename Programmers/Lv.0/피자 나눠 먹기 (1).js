// 2022.10.11(Tues)

// my way
function solution(n) {
  let answer = 0;
  if (n % 7 === 0) {
    answer = parseInt(n / 7);
  } else {
    answer = parseInt(n / 7) + 1;
  }

  return answer;
}

// other way
function solution(n) {
  return Math.ceil(n / 7); // 올림
}
