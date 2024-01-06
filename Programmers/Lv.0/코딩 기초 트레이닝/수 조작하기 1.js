// 2024.01.06(Sat)

// my way
function solution(n, control) {
  for (let el of control) {
    if (el === "w") n += 1;
    else if (el === "s") n -= 1;
    else if (el === "d") n += 10;
    else if (el === "a") n -= 10;
  }
  return n;
}

// ----------------------------------------------------------------

// other way
const object = {
  w: (n) => n + 1,
  s: (n) => n - 1,
  d: (n) => n + 10,
  a: (n) => n - 10,
};

function solution(n, control) {
  return [...control].reduce((acc, cur) => object[cur](acc), n);
}

// object[cur](acc) 이해를 위한 간단 예제
const dog = {
  name: "멍멍이",
  sound: "멍멍",
  say: (n) => console.log(n), // 함수
};

dog.say(); // 객체 내 함수 호출 형태

console.log(solution(0, "wsdawsdassw")); // -1
