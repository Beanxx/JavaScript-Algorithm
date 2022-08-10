// 선택 정렬 알고리즘
// 2022.08.10(Wed)

function SelectionSort(arr) {
  // 주어진 배열을 Selection Sort로 오름차순 정렬
  // Input: 정렬 가능한 요소의 배열 arr
  // Output: 오름차순으로 정렬된 배열

  // 배열 arr의 index 0 ~ 마지막 index까지 반복
  for (let i = 0; i < arr.length - 1; i++) {
    // 현재 index를 최소값 index를 나타내는 변수에 할당
    let min = i;

    // i 이후의 배열요소과 비교하는 반복문
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        // j index를 최소값의 index로 재할당
        min = j;
      }
    }

    // 모든 비교가 끝난 후, min에는 최소값의 index가 할당되어 있음.
    // i값과 최소값을 바꿔서 할당해줌.
    let temp = arr[i];
    arr[i] = arr[min];
    arr[min] = temp;
  }
  // 정렬된 배열 반환
  return arr;
}

console.log(SelectionSort([9, 4, 8, 3, 1, 5]));
