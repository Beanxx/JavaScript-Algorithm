// first try - 2022.05.10(Tues)
// second try - 2022.06.29(Wed)

// Q: 임의의 값을 입력받아 타입을 리턴해야 합니다.

// * 조건 *
// JS에서 array, null 타입은 존재하지 않지만, 이 둘을 구분하여 출력

function getType(anything) {
  if (Array.isArray(anything)) {
    // anything이 배열인 경우
    return "array";
  } else if (anything === null) {
    // anything이 null 값인 경우
    return "null";
  } else {
    return typeof anything; // 나머지 경우는 anything의 타입 자체를 리턴
  }
}

// Array.isArray(s): s가 배열인지 true/false
