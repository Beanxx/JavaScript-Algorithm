// 2024.01.14(Sun)

// my way
function solution(a, b, c) {
  if (a !== b && a !== c && b !== c) {
    return a + b + c;
  } else if (a === b && b === c) {
    return (
      (a + b + c) * (a ** 2 + b ** 2 + c ** 2) * (a ** 3 + b ** 3 + c ** 3)
    );
  } else {
    return (a + b + c) * (a ** 2 + b ** 2 + c ** 2);
  }
}

// --------------------------------------------------------------------------

// other way
function solution(a, b, c) {
  let sum1 = a + b + c;
  let sum2 = a * a + b * b + c * c;
  let sum3 = a ** 3 + b ** 3 + c ** 3;

  if (a === b && b === c) return sum1 * sum2 * sum3;
  else if (a === b || a === c || b === c) return sum1 * sum2;
  else return sum1; // a,b,c 숫자가 모두 다를 경우
}

console.log(solution(2, 6, 1)); // 9
console.log(solution(5, 3, 3)); // 473
console.log(solution(4, 4, 4)); // 110592
