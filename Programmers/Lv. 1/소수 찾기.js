function solution(n) {
  const arr = [];

  for (let i = 0; i < n + 1; i++) {
    arr.push(true); // true -> 소수 의미
  }

  for (let i = 2; i <= Math.sqrt(n); i += 1) {
    // 소수일 때
    if (arr[i]) {
      for (let j = i * i; j <= n; j += i) {
        arr[j] = false; // 소수들의 곱일 땐 소수 X
      }
    }
  }

  // 0과 1은 소수가 아니므로 false 값으로 바꿔줌
  arr.splice(0, 2, false, false);

  // true 값만 필터로 걸러냄 = 소수만 걸러냄
  const result = arr.filter((el) => {
    return el === true;
  });

  return result.length;
}

// 에라토스테네스의 체: 모든 자연수는 소수들의 곱으로 표현!
// => 입력 받은 숫자 즉, n까지의 정수 중 소수 개수를 구해야 할 때 유용
