// first try - 2022.05.11(Wed)
// second try - 2022.07.01(Fri)

// Q: 배열과 객체를 입력받아 배열의 각 요소들을 객체의 키로 했을 때 그 값을 추출하여 만든 새로운 객체를 리턴해야 합니다.

// * 주의 *
// 입력받은 객체에 존재하지 않는 키는 무시
// 입력받은 객체 수정 X

function select(arr, obj) {
  let newObj = {};
  for (let el in obj) {
    // 객체 내 반복 (el는 key)
    for (let item of arr) {
      // 배열 내 반복
      if (item === el) {
        // 배열 내 요소와 객체 내 key와 같으먄
        newObj[el] = obj[el]; // 해당하는 객체 내 속성을 newObj에 할당
      }
    }
  }
  return newObj;
}
