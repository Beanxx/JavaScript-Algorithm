// 복습완료💫(221106)
// 2022.10.25(Tues)

// my way
function solution(array, n) {
  return array.filter((el) => el === n).length;
}
console.log(array.filter((el) => el === n)); // [1, 1]

console.log(solution([1, 1, 2, 3, 4, 5], 1)); // 2
