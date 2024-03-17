// 2024.03.17(Sun)

// my way
function solution(binomial) {
  const arr = binomial.split(" ");

  const a = Number(arr[0]);
  const b = Number(arr[2]);

  if (arr[1] === "+") return a + b;
  else if (arr[1] === "-") return a - b;
  else if (arr[1] === "*") return a * b;
}

// --------------------------------------------------

// other way 1

const ops = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "*": (a, b) => a * b,
};

function solution(binomial) {
  const [a, op, b] = binomial.split(" ");
  return ops[op](+a, +b);
}

// ------------------------------------------------------

// other way 2
function solution(binomial) {
  const [a, op, b] = binomial.split(" ");
  return op === "+" ? +a + +b : op === "-" ? a - b : a * b;
}
// 삼항 연산자가 한줄로 표현할 수 있어서 좋긴 한데 중첩 삼항 연산자는 가독성이 좀 떨어지는듯 지향하는게 좋을지도,,

console.log(solution("43 + 12")); // 55
console.log(solution("0 - 7777")); // -7777
console.log(solution("40000 * 40000")); // 1600000000
