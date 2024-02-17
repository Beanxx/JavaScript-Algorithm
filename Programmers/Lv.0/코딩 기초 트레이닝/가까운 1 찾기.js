// 2024.02.17(Sat)

// my way
function solution(arr, idx) {
  const sliceArrIdx = arr.slice(idx).indexOf(1);
  return sliceArrIdx === -1 ? -1 : sliceArrIdx + idx;
}

// 문제에서 'idx보다 크면서' -> '같거나 크면서'로 수정해서 풀어야 통과한다. . .

// other way
function solution(arr, idx) {
  return arr.indexOf(1, idx);
}

// indexOf의 2번째 매개변수도 존재하는지를 몰랐는데 알고 있었다면 엄청 간단하게 풀 수 있는 문제였다,,

// indexOf(searchElement): searchElement가 위치하는 첫번째 index 반환
// indexOf(searchElement, fromIndex): fromIndex 인덱스 위치부터 검색 시작
// 찾는 값이 없는 경우 -1 반환

console.log(solution([0, 0, 0, 1], 1)); // 3
console.log(solution([1, 0, 0, 1, 0, 0], 4)); // -1
console.log(solution([1, 1, 1, 1, 0], 3)); // 3
