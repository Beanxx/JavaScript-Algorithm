// 2022.10.18(Tues)

// my way
function solution(box, n) {
  return parseInt(box[0] / n) * parseInt(box[1] / n) * parseInt(box[2] / n);
}

// other way
function solution(box, n) {
  return box.map((el) => parseInt(el / n)).reduce((a, b) => a * b);
}
