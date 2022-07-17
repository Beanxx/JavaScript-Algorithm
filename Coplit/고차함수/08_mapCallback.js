// first try - 2022.05.24(Tues)
// second try - 2022.07.03(Sun)

// Q: 함수와 배열을 입력받아 배열의 각 요소에 함수가 적용된 새로운 배열을 리턴해야 합니다.

// 반복문(for)문 사용해야 함
// arr.map 사용 금지
// 빈 배열을 입력받은 경우, 빈 배열 리턴

function mapCallback(func, arr) {
  let result = [];
  for (let el of arr) {
    result.push(func(el)); // func 함수가 적용된 배열 arr의 요소들을 result에 삽입
  }
  return result;
}
