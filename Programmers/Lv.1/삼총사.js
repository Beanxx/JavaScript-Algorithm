// 2022.11.21(Mon)
// 삼총사.js

function solution(number) {
  let result = 0;
  // 범위를 아래와 같이 설정하므로써 서로 다른 수를 뽑을 수 있도록 설정함
  for (let i = 0; i < number.length - 2; i++) {
    for (let j = i + 1; j < number.length - 1; j++) {
      for (let k = j + 1; k < number.length; k++) {
        if (number[i] + number[j] + number[k] === 0) {
          result++;
        }
      }
    }
  }
  return result;
}

console.log(solution([-2, 3, 0, 2, -5])); // 2
console.log(solution([-1, 1, -1, 1])); // 0
