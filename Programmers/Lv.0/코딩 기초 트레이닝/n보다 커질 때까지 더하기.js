// 2024.01.09(Tues)

// my way
function solution(numbers, n) {
  let result = 0;

  for (let el of numbers) {
    result += el;

    if (result > n) return result;
  }
}

// other way
function solution(numbers, n) {
  return numbers.reduce((acc, cur) => (acc <= n ? acc + cur : acc));
}

// 더한 누적값(acc)이 n보다 커지면 stop해야 하는 조건을 반대로 생각하면 누적값(acc)이 n보다 작거나 같을 때까지 배열 원소들을 더하게 됨

console.log(solution([34, 5, 71, 29, 100, 34], 123)); // 139
console.log(solution([58, 44, 27, 10, 100], 139)); // 239
