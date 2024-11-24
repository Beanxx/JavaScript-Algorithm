// 복습완료💫(221116)
// 2022.10.19(Wed)

// my way
function solution(n) {
  let answer = [];

  // n이 2로 나누어 떨어질 때까지 순회
  while (n % 2 === 0) {
    // answer에 2가 포함되지 않았다면 push하고, 이미 포함되어 있다면 push X
    if (!answer.includes(2)) answer.push(2);
    n /= 2;
  }

  // 위에서 이미 2로 나눌 수 있을 때까지 나눴기 때문에 앞으로는 어떠한 짝수로는 안 나눠질 것이다.
  // 그러므로 3부터 2씩 증가해서 홀수들로 나누도록 순회해주기!
  for (let i = 3; i <= n; i += 2) {
    // i로 나누어 떨어질 때까지 순회
    while (n % i === 0) {
      if (!answer.includes(i)) answer.push(i);
      n /= i;
    }
  }
  return answer;
}

// 241124
function solution(n) {
  let num = n;
  let sosu = 2;
  let result = [];

  while (num !== 1) {
    if (num % sosu === 0) {
      num /= sosu;

      if (!result.includes(sosu)) {
        result.push(sosu);
      }
    } else {
      sosu++;
    }
  }

  return result;
}

// other way 1
function solution(n) {
  let answer = [];

  for (let i = 2; i <= n; i++) {
    // 일단 n을 나눌 수 있는 수를 answer에 모조리 push한 후, 뒤에서 중복 원소 제거해주기!
    while (n % i === 0) {
      n /= i;
      answer.push(i);
    }
  }
  return [...new Set(answer)]; // 중복 원소 제거
}

// other way 2
function solution(n) {
  let answer = [];
  let i = 2;

  while (i <= n) {
    if (n % i === 0) {
      answer.push(i);
      n /= i;
    } else {
      i++;
    }
  }

  return [...new Set(answer)];
}

console.log(solution(420)); // [2, 3, 5, 7]
