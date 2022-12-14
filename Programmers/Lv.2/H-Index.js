// // 2022.12.14(Wed)
// H-Index.js

// my way
function solution(citations) {
  let h = 0;
  citations.sort((a, b) => b - a); // 내림차순 정렬을 해주지 않으면 h의 최댓값을 구하기 전에 h를 return해버림
  // 반복문 순회를 끝까지 돌려서 내림차순 정렬을 해준 후에 순회해야 함!
  // citations = [ 6, 5, 3, 1, 0 ]

  for (let i = 0; i < citations.length; i++) {
    // 해당 요소가 h보다 클 경우 h +1
    if (citations[i] > h) h++;
  }
  return h;
}

console.log(solution([3, 0, 6, 1, 5])); // 3
