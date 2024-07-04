// 24.07.04(Thurs)

// my way
function solution(arr) {
  if (!arr.includes(2)) {
    return [-1];
  }

  const firstIdx = arr.indexOf(2);
  const lastIdx = arr.lastIndexOf(2);

  return arr.slice(firstIdx, lastIdx + 1);
}

// ----------------------------------------------------------------

// other way
function solution(arr) {
  const from = arr.indexOf(2);
  const end = arr.lastIndexOf(2);

  return from === -1 ? [-1] : arr.slice(from, end + 1);
}

console.log(solution([1, 2, 1, 4, 5, 2, 9])); // [2, 1, 4, 5, 2]
console.log(solution([1, 2, 1])); // [2]
console.log(solution([1, 1, 1])); // [-1]
console.log(solution([1, 2, 1, 2, 1, 10, 2, 1])); // [2, 1, 2, 1, 10, 2]
