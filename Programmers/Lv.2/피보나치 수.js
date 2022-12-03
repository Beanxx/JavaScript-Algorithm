// // 2022.12.03(Sat)
// 피보나치 수.js

// my way
function solution(n) {
  let arr = [0, 1];

  for (let i = 2; i <= n; i++) {
    arr.push((arr[i - 2] + arr[i - 1]) % 1234567);
  }
  return arr[n];
}

console.log(solution(3)); // 2
console.log(solution(5)); // 5

// 첨엔 return문에서 결과값에 % 1234567 처리를 해줬는데 7번부터 쭉 통과가 안됐다,,
// 그래서 for문에서 값을 하나씩 push하는 과정에서 처리해주니까 통과~!
