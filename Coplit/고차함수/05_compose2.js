// first try - 2022.05.24(Tues)
// second try - 2022.07.03(Sun)

// Q: 두 개의 함수를 입력받아 두 함수가 결합된 새로운 함수를 리턴해야 합니다.

function compose2(func1, func2) {
  // 새로운 함수를 만들어서 리턴
  return function (num) {
    return func1(func2(num));
  };
}
