// 2024.03.17(Sun)

// my way
function solution(n) {
  let result = [n];
  let x = n;

  while (x !== 1) {
    if (x % 2 === 0) {
      result.push(x / 2);
      x /= 2;
    } else if (x % 2 === 1) {
      result.push(3 * x + 1);
      x = 3 * x + 1;
    }
  }

  return result;
}

// ------------------------------------------------------

// other way 1
function solution(n) {
  let result = [n];

  while (n > 1) {
    if (n % 2 === 0) n /= 2;
    else n = 3 * n + 1;

    result.push(n); // 이미 위에서 n을 변경했으니 이 코드는 조건문 안에 작성하지 않고 공통으로 작성해도 됨!
  }

  return result;
}

// -------------------------------------------------------

// other way 2
function solution(n, arr = []) {
  arr.push(n);

  if (n === 1) return arr; // 재귀 종료 조건

  // 재귀 함수
  if (n % 2 === 0) return solution(n / 2, arr);
  else return solution(3 * n + 1, arr);
}

// 재귀함수로 푸는 방법도 있음!

console.log(solution(10)); // [10, 5, 16, 8, 4, 2, 1]
