// 2024.04.07(Sun)

// my way
function solution(n) {
  const result = Array.from(Array(n), () => Array(n).fill(0)); // 일단 0으로 만들고자 하는 이중 배열 원소 채워놓기

  for (let i = 0; i < n; i++) {
    result[i][i] = 1;
  }

  return result;
}

// arr[i][i] 해당 원소만 1롤 변경하면 된다는 패턴만 알아내면 풀 수 있는 문제!

// Array.from([1, 2, 3], (x) => x + x);     => [2, 4, 6]
// Array.from({ length: 5 }, (v, i) => i);  => [0, 1, 2, 3, 4]

// -------------------------------------------

// other way
function solution(n) {
  return Array(n)
    .fill()
    .map((_, i) =>
      Array(n)
        .fill()
        .map((_, j) => (i === j ? 1 : 0))
    );
}

console.log(solution(3)); // [[1, 0, 0], [0, 1, 0], [0, 0, 1]]
console.log(solution(6)); // [[1, 0, 0, 0, 0, 0], [0, 1, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0], [0, 0, 0, 1, 0, 0], [0, 0, 0, 0, 1, 0], [0, 0, 0, 0, 0, 1]]
console.log(solution(1)); // [[1]]
