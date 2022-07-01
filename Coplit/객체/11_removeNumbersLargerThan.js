// first try - 2022.05.11(Wed)
// second try - 2022.07.01(Fri)

// Q: 수와 객체를 입력받아 입력받은 수보다 큰 수를 갖는 속성을 모두 제거해야 합니다.

// * 조건 *
// 대소 비교는 number 타입에만 적용

function removeNumbersLargerThan(num, obj) {
  for (let el in obj) {
    if (typeof obj[el] === "number" && obj[el] > num) {
      delete obj[el];
    }
  }
}

// 첨엔 obj.el으로 했는데 pass가 안 됐다.. 모가 다른거지...
// obj.el -> obj[el]
