// 2024.01.02(Tues)

// my way
function solution(arr, k) {
  if (k % 2 === 0) {
    return arr.map((el) => el + k);
  } else {
    return arr.map((el) => el * k);
  }
}

// other way
// my way
function solution(arr, k) {
  return arr.map((el) => (k % 2 ? el * k : el + k));
}

console.log(solution([1, 2, 3, 100, 99, 98], 3)); // [3, 6, 9, 300, 297, 294]
console.log(solution([1, 2, 3, 100, 99, 98], 2)); // [3, 4, 5, 102, 101, 100]
