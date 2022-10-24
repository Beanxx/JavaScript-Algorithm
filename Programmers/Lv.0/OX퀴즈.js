// 2022.10.24(Mon)

// my way
function solution(quiz) {
  let answer = [];
  for (let i = 0; i < quiz.length; i++) {
    quiz[i] = quiz[i].split(" ");
    let temp = +quiz[i][0];
    for (let j = 0; j < quiz[i].length; j++) {
      if (quiz[i][j] === "+") {
        temp += +quiz[i][j + 1];
      } else if (quiz[i][j] === "-") {
        temp -= +quiz[i][j + 1];
      }
    }

    if (+temp === +quiz[i][quiz[i].length - 1]) {
      answer.push("O");
    } else {
      answer.push("X");
    }
  }
  return answer;
}

// other way1

function solution(quiz) {
  return quiz.map((t) => {
    const [calc, result] = t.split(" = ");
    const sign = calc.includes("+") ? 1 : -1;
    const [a, b] = calc.split(sign === 1 ? " + " : " - ");

    // b * sign => 뺄셈의 경우, -1를 b에 곱하면 뺄셈 효과와 같기 때문!
    return +a + +b * sign === +result ? "O" : "X";
  });
}

// other way2
function solution(quiz) {
  return quiz
    .map((el) => el.split(" = "))
    .map((el) => {
      return eval(el[0]) == el[1] ? "O" : "X";
    });
}

// 같은 문제여도 생각하지도 못한 풀이 과정이 굉장히 다양하다 'o'
