// first try - 2022.05.11(Wed)
// second try - 2022.07.01(Fri)

// Q: 객체와 키를 입력받아 키에 해당하는 값이 배열인 경우, 마지막 요소를 리턴해야 합니다.

// * 주의 *
// 추가하려는 속성이 이미 첫번째 객체에 존재하는 경우, 기존 값을 그대로 두기
// 두번째 객체는 수정 X

function extend(obj1, obj2) {
  for (let key in obj2) {
    // obj2 객체 내의 key 반복
    if (!(key in obj1)) {
      // obj2 객체의 key가 obj1 객체에 있지 않다면
      obj1[key] = obj2[key]; // obj2 속성을 obj1 속성에 추가
    }
  }
}
