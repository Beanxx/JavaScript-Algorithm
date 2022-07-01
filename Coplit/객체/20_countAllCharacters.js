// first try - 2022.05.11(Wed)
// second try - 2022.07.01(Fri)

// Q: 문자열을 입력받아 문자열을 구성하는 각 문자(letter)를 키로 갖는 객체를 리턴해야 합니다.
//    각 키의 값은 해당 문자가 문자열에서 등장하는 횟수를 의미하는 number 타입의 값이어야 합니다.

// * 주의 *
// 빈 문자열을 입력받은 경우, 빈 객체 리턴

// first way
function countAllCharacters(str) {
  let obj = {};
  for (let i = 0; i < str.length; i++) {
    if (obj[str[i]] === undefined) {
      // 만약 obj 객체 안에 str[i] 문자열인 key가 없다면 value를 0으로 key-value만 생성만 해줌
      obj[str[i]] = 0;
    }
    obj[str[i]]++; // obj 객체 내에 str[i]이 존재한다면 value를 1씩 증가시킴
  }
  return obj;
}

// --------------------------------------------

// second way
function countAllCharacters(str) {
  let obj = {};
  for (let i = 0; i < str.length; i++) {
    if (str[i] in obj) {
      // newObj 객체에 문자열 str[i]이 존재한다면
      obj[str[i]] += 1; // 객체 내 value를 1씩 증가
    } else {
      obj[str[i]] = 1; // newObj 객체에 문자열 str[i]이 존재한지 않는데 for문 순회를 한다는건 1번만 등장한 것이므로 value를 1로 할당
    }
  }
  return obj;
}
