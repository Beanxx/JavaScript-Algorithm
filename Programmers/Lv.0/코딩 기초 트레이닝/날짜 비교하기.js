// 2024.10.25(Fri)

// my way
function solution(date1, date2) {
  if (date1[0] < date2[0]) {
    return 1;
  }

  if (date1[0] === date2[0] && date1[1] < date2[1]) {
    return 1;
  }

  if (date1[0] === date2[0] && date1[1] === date2[1] && date1[2] < date2[2]) {
    return 1;
  }

  return 0;
}

// 넘 1차원적인 방법으로 품;-;

// ------------------------------------------------------------------

// other way
function solution(date1, date2) {
  return new Date(date1) < new Date(date2) ? 1 : 0;
}

// 왜 Date 메서드 쓸 생각을 못했지,, so simple *~ bb

console.log(solution([2021, 12, 28], [2021, 12, 29])); // 1
console.log(solution([1024, 10, 24], [1024, 10, 24])); // 0
