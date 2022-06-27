// first try - 2022.04.27(Wed)
// second try - 2022.06.27(Mon)

// Q: 임의의 값을 입력받아 falsy 값인지 여부를 리턴해야 합니다.

// my way
function isFalsy(anything) {
  if (
    anything === "" ||
    anything === 0 ||
    anything === false ||
    anything === undefined ||
    anything === null ||
    isNaN(anything) === true
  ) {
    return true; // falsy 값일 경우 true 리턴
  } else {
    return false;
  }
}

// anything이 NaN인지 판별할 떄는 isNaN() 메소드를 활용! -> NaN이면 true 리턴, 아니면 false 리턴

// --------------------------------------------------------------------------------

// reference
function isFalsy(anything) {
  return !Boolean(anything);
}

// Boolean() 메소드를 활용하면 완전 짧은 코드로 구현 가능!
// falsy 값이라는게 boolean 값이 false을 의미하므로 Boolean(anything)은 false가 되고,
// falsy 값일 때 true가 리턴되야 하므로 !Boolean(anything);
