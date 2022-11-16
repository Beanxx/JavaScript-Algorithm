// 복습완료💫(221116)
// 2022.10.24(Mon)

// my way
function solution(quiz) {
  let answer = [];
  for (let i = 0; i < quiz.length; i++) {
    quiz[i] = quiz[i].split(" "); // quiz[0] = ['3', '-', '4', '=', '-3']
    let temp = +quiz[i][0]; // 첫번째 피연산자를 초기값으로 할당

    for (let j = 0; j < quiz[i].length; j++) {
      // 첫번째 피연산자에 연산자 뒤에 오는 두번째 피연산자를 더하기
      if (quiz[i][j] === "+") temp += +quiz[i][j + 1];
      // 첫번째 피연산자에 연산자 뒤에 오는 두번째 피연산자를 빼기
      else if (quiz[i][j] === "-") temp -= +quiz[i][j + 1];
    }

    // 연산한 결과 값과 배열의 마지막 원소인 주어진 결과값이 같으면 O
    if (+temp === +quiz[i][quiz[i].length - 1]) answer.push("O");
    else answer.push("X");
  }
  return answer;
}

// other way1
function solution(quiz) {
  return quiz.map((t) => {
    // = 연산자를 기준으로 연산식과 결과값 나누어 할당
    const [calc, result] = t.split(" = ");
    const sign = calc.includes("+") ? 1 : -1;
    // sign이 1이면 덧셈이므로 + 연산자를 기준으로 a,b 연산자 할당
    const [a, b] = calc.split(sign === 1 ? " + " : " - ");

    // b * sign => 뺄셈의 경우, -1를 b에 곱하면 뺄셈 효과와 같기 때문!
    return +a + +b * sign === +result ? "O" : "X";
  });
}

// other way2
function solution(quiz) {
  return quiz
    .map((el) => el.split(" = ")) // [['3 - 4', '-3'], ['5 + 6', '11']]
    .map((el) => {
      return eval(el[0]) == el[1] ? "O" : "X";
    });
}
// eval(): 알아서 식을 계산해주는 메소드 but, 사용 지양하기!

// 같은 문제여도 생각하지도 못한 풀이 과정이 굉장히 다양하다 'o'

console.log(solution(["3 - 4 = -3", "5 + 6 = 11"])); // ["X", "O"]
