// first try - 2022.05.11(Wed)
// second try - 2022.07.01(Fri)

// Q: 객체를 입력받아 number 타입의 값을 갖는 속성을 모두 제거해야 합니다

// * 조건 *
// 별도의 리턴문(return statement) 작성 X

function removeNumberValues(obj) {
  for (let el in obj) {
    // 객체 내에서 반복문 돌릴 땐 for...in문 사용하자!
    if (typeof obj[el] === "number") {
      delete obj[el]; // 별도의 return문이 없어도 속성 제거 가눙
    }
  }
}
