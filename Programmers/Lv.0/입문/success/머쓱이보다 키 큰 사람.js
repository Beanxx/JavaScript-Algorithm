// 복습완료💫(221106)
// 2022.10.25(Tues)

// my way
function solution(array, height) {
  return array.filter((el) => el > height).length;
}
console.log(array.filter((el) => el > height)); // [180, 192, 170]

console.log(solution([149, 180, 192, 170], 167)); // 3
