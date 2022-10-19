// 2022.10.19(Wed)

// my way
function solution(n) {
  const answer = [];

  while (n % 2 === 0) {
    if (!answer.includes(2)) {
      answer.push(2);
    }
    n /= 2;
  }

  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    while (n % i === 0) {
      if (!answer.includes(i)) {
        answer.push(i);
      }
      n /= i;
    }
  }

  if (n > 2) {
    answer.push(n);
  }

  return answer;
}

// other way
function solution(n) {
  let answer = [];

  for (let i = 2; i <= n; i++) {
    while (n % i === 0) {
      n /= i;
      answer.push(i);
    }
  }

  return [...new Set(answer)]; // 중복 원소 제거
}
