// 2023.12.10(Sun)

// my way
function solution(num_str) {
  let result = 0;

  for (let el of num_str) {
    result += +el;
  }

  return result;
}

// other way
function solution(num_str) {
  return [...num_str].reduce((acc, cur) => acc + +cur, 0);
}

console.log(solution("123456789")); // 45
console.log(solution("1000000")); // 1
