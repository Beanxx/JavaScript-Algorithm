// 2022.11.24(Thurs)
// 기사단원의 무기.js

function solution(number, limit, power) {
  let result = [];

  for (let i = 1; i <= number; i++) {
    let count = 0;

    // j 반복문 순회를 그냥 i까지로 할 경우 시간 초과가 남.. -> Math.sqrt(i)로 범위를 설정해서 약수의 짝을 고려하기!!
    for (let j = 1; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        // 만약 i가 9인 경우 Math.sqrt(9) = 3 즉, 이에 대한 약수의 짝이 없고, 하나의 약수에 해당하므로 count +1
        // ex. i = 9, 25, 36 ...
        if (Math.sqrt(i) === j) count++;
        // 약수가 짝이 있을 경우 count +2
        // ex. i = 10 -> 약수 2의 짝은 5
        else count += 2;
      }
    }
    result.push(count);
  }
  // result = [1, 2, 2, 3, 2, 4, 2, 4, 3, 4]
  return result.reduce((acc, cur) => acc + (cur <= limit ? cur : power), 0);
  // 1 + 2 + 2 + 3 + 2 + (4->2) + 2 + (4->2) + 3 + (4->2) = 21
}

console.log(solution(5, 3, 2)); // 10
console.log(solution(10, 3, 2)); // 21
