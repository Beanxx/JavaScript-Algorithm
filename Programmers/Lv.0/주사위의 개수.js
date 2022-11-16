// 복습완료💫(221116)
// 2022.10.18(Tues)

// my way
function solution(box, n) {
  return parseInt(box[0] / n) * parseInt(box[1] / n) * parseInt(box[2] / n);
}

// other way
function solution(box, n) {
  return box.map((el) => parseInt(el / n)).reduce((a, b) => a * b);
}
// map을 쓰면 box의 원소가 아무리 많아져도 코드 길이를 늘리지 않고 구현 가능!

console.log(solution([10, 8, 6], 3)); // 12
