// first try - 2022.05.10(Tues)
// second try - 2022.06.29(Wed)

// Q: 배열을 입력받아 가장 큰 요소를 리턴해야 합니다.

// my way
function getLargestElement(arr) {
  let result;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < arr[i + 1]) {
      // 큰 값이 나올 때마다 result 값을 더 큰 값으로 변경해줌
      result = arr[i + 1];
    }
  }
  return result;
}

// ----------------------------------------------------

// other way
function getLargestElement(arr) {
  let result = arr[0]; // 배열 첫번째 요소를 초기값으로
  for (let el of arr) {
    // for...of문으로 배열 내의 요소 반복
    if (el > result) {
      result = el; // 첫번째 요소보다 큰 값이 등장하면 값 change
    }
  }
  return result;
}

// for ... in: 객체에서 반복할 때 사용
// for ... of: 반복가능한 객체에 대해서 반복 (보통 배열에서 반복할 때 사용)

// 난 그냥 for문으로 풀었는데 for...of문 방법도 로직은 거의 똑같지만 보기에 더 깔꼼한 너낌..?
