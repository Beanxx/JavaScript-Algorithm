// [이진탐색]
// Q: 위와 같은 배열이 있을 때 target number가 해당 배열에 존재하는지 여부를 알 수 있는 풀이를 이진 탐색을 사용해서 풀어보세요.

const arr = [8, 2, 4, 6, 10, 11, 20, 24, 5, 1, 3];
const target = 400;

function solution(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  arr.sort((a, b) => a - b);

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] > target) {
      right = mid - 1;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      return 1;
    }
  }

  return 0;
}

console.log(solution(arr, target));
