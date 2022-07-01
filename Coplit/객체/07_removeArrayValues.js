// first try - 2022.05.11(Wed)
// second try - 2022.07.01(Fri)

// Q: 객체를 입력받아 배열을 값으로 갖는 속성을 모두 제거해야 합니다.

// * 조건 *
// 별도의 리턴문(return statement) 작성 X

function removeArrayValues(obj) {
  for (let el in obj) {
    if (Array.isArray(obj[el])) {
      // value가 배열이면
      delete obj[el]; // 해당 속성 삭제 (value를 삭제하면 속성인 property도 함께 삭제)
    }
  }
}
