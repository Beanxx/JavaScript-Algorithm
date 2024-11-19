// 복습완료💫(221106)
// 2022.10.10(Mon)

function solution(array) {
  array.sort((a, b) => a - b); // 배열 원소 오름차순 정렬
  let idx = parseInt(array.length / 2);
  return array[idx];
}

// array 길이가 5라고 했을 때 arr.length / 2 = 2.5
// parseInt(2.5) = 2인데 index는 0부터 시작이므로 0, 1, 2, 3, 4 중 가운데 index의 자리는 2가 된다
// 즉, parseInt(array.length / 2)으로 가운데 index를 찾아낼 수 있는 것!

console.log(solution([9, -1, 0])); // 0
