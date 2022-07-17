// first try - 2022.05.24(Tues)
// second try - 2022.07.03(Sun)

// Q: 함수들을 입력받아 함수들이 입력된 차례대로 결합된 새로운 함수를 리턴해야 합니다.

function pipe(...funcn) {
  // 함수들의 수가 정해져 있지 않으므로 spread 연산자를 사용하여 매개변수 선언
  return function (num) {
    let result = num; // 입력받는 num을 초기값으로
    for (let i = 0; i < funcn.length; i++) {
      // 함수의 길이 즉, 함수의 수만큼 순회
      result = funcn[i](result); // i번째 순서에 정의되어 있는 함수에 num을 대입하여 result에 담아줌
    }
    return result;
  };
}
