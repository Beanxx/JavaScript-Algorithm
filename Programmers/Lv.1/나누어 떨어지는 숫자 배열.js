// 2022.06.27(Mon)
// 나누어 떨어지는 숫자 배열.js

// my way
function solution(arr, divisor) {
  // 1. 배열 요소를 오름차순으로 먼저 정렬
  // 2. 빈 배열을 선언하여 나누어 떨어지는 요소만 빈 배열에 push하여 추가

  // 그냥 arr.sort()로 정렬시 유니코드 순서에 따라 [5,10]의 경우 [10, 5]로 정렬
  // 10에서 10의 자리 1로 인해 10이 5보다 작다고 인식
  // 우리는 정수로 비교하여 [5, 10]로 정렬 원함 -> 함수를 정의하여 정렬해야 함
  let sortArr = arr.sort(function (a, b) {
    return a - b;
  });

  let result = [];
  for (let i = 0; i < sortArr.length; i++) {
    if (sortArr[i] % divisor === 0) {
      result.push(sortArr[i]);
    }
  }
  // 결과가 빈 배열일 경우 [-1] return
  if (result.length === 0) {
    return [-1];
  }
  return result;
}

// other way
function solution(arr, divisor) {
  // filter로 먼저 조건에 해당하는 요소만 있는 배열을 result 변수에 할당
  const result = arr.filter((num) => num % divisor === 0);
  // 결과가 빈배열일 경우 [-1] return하며,
  // 결과가 빈배열이 아닐 경우 result 배열 요소를 sort로 오름차순 정렬
  return result.length == 0 ? [-1] : result.sort((a, b) => a - b);
}

// filter로 긴 for문을 대체하고
// 삼항연산자를 이용하여 빈배열 처리와 정렬을 한번에 해결 가능!
