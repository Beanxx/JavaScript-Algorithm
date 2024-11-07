// 2024.11.07(Thurs)

// my way
function solution(arr, query) {
  for (let i = 0; i < query.length; i++) {
    // 짝수 index
    if (i % 2 === 0) {
      arr = arr.spice(0, query[i] + 1); // // 원본 배열 arr의 index 0 즉, 처음부터 query[i]+1 개 요소 제거 -> 제거한 요소가 arr에 할당
    } else {
      // 홀수 index
      arr = arr.splice(query[i]); // 원본 배열 arr의 index query[i]부터 모든 요소 제거 -> 이를 arr에 할당하면 제거한 요소가 배열 arr로 반환
    }
  }
  return arr;
}

// ------------------------------------------------------------------

// other way
function solution(arr, query) {
  return query.reduce(
    (acc, v, i) => (i % 2 ? acc.slice(v) : acc.slice(0, v + 1)),
    arr
  );
}

console.log(solution([0, 1, 2, 3, 4, 5], [4, 1, 2])); // [1, 2, 3]
