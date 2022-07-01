// first try - 2022.05.11(Wed)
// second try - 2022.07.01(Fri)

// Q: 객체와 키를 입력받아 키에 해당하는 값이 배열인 경우, 마지막 요소를 리턴해야 합니다.

// * 주의 *
// 주어진 키에 해당하는 값이 배열이고, 빈 배열이 아닌 경우에만 배열의 요소 리턴
// 그 외의 경우, undefined 리턴

function getLastElementOfProperty(obj, property) {
  if (Array.isArray(obj[property])) {
    // 객체 내의 property에 해당하는 key의 value가 배열이면
    return obj[property][obj[property].length - 1];
    // obj[property]: value
    // -> 요기 뒤에 붙는 [obj[property].length-1]는 index를 뜻함.
    // 예를 들어, value: [1, 2, 5]이면 value의 길이-1의 index가 배열의 마지막 요소를 뜻하게 됨
  } else {
    return undefined;
  }
}
