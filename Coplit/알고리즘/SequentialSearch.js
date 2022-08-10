// 순차 검색 알고리즘
// 2022.08.10(Wed)

function SequentialSearch(arr, k) {
  // 검색 키 k를 사용하여 순차 검색 구현
  // Input: n개의 요소를 갖는 배열 arr와 검색 키 k
  // Output: K값과 같은 요소 인덱스 / 요소가 없을 때 -1

  let n = arr.length; // 배열 개수 n에 할당
  arr[n] = k; // 검색 키 k를 arr의 n index에 할당 (arr 마지막 요소로 k 추가)
  let i = 0;

  // 배열 arr 값이 k와 같지 않을 때까지 반복 => k와 같으면 반복 stop
  while (arr[i] !== k) {
    i++; // k와 같지않으면 i++
  }

  // k를 배열 arr에 할당하기 전의 배열 개수보다 적다면 (배열 내에 k값이 이미 존재한다면)
  if (i < n) {
    return i; // i(k가 있는 index) 반환
  } else {
    return -1; // 배열 내에 k가 없다면 -1 반환
  }
}

console.log(SequentialSearch([7, 2, 9, 5, 3, 8, 9], 8));
