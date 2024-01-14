// 2024.01.14(Sun)

// my way
function solution(arr) {
  let result = [];

  arr.forEach((el) => {
    for (let i = 0; i < el; i++) {
      result.push(el);
    }
  });

  return result;
}

// for문을 안 쓰고 구현하려고 했는데 결국 실패하고 이중for문을 써서 통과

// --------------------------------------------------------------------------

// other way 1
function solution(arr) {
  return arr.reduce((acc, cur) => acc.concat(Array(cur).fill(cur)), []);
}

// array.concat(): 배열 + 배열 (ex. [1, 2].concat([3, 4]) => [1, 2, 3, 4])
// Array(2).fill(2): [2, 2]
// [] 초기값에서 시작 -> [] + [2, 2] = [2, 2] + [3, 3, 3] = [2, 2, 3, 3, 3]

// other way 2
function solution(arr) {
  return arr.map((el) => Array(el).fill(el)).flat();
}

// [2, 3].map((el) => Array(el).fill(el)); => [ [ 2, 2 ], [ 3, 3, 3 ] ] -> .flat() => [ 2, 2, 3, 3, 3 ]

// other way 3
function solution(arr) {
  return arr.flatMap((el) => Array(el).fill(el));
}

// arr.flatMap(): (arr.map(...args).flat())과 동일하지만, 두 메서드를 따로 호출하는 것보다 약간 더 효율적

// -----------------------------------------------------------------------------------------

// my way -> fail case (배열 원소가 두자리수인 경우의 케이스 통과 X)
function solution(arr) {
  return arr
    .map((el) => String(el).repeat(el).split(","))
    .join(",")
    .split(",")
    .map((el) => +el);
}

console.log(solution([2, 3])); // [5, 5, 5, 5, 5, 1, 4, 4, 4, 4]
console.log(solution([5, 1, 4])); // [5, 5, 5, 5, 5, 1, 4, 4, 4, 4]
console.log(solution([6, 6])); // [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6]
