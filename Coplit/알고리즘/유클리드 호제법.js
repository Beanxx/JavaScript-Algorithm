// 유클리드 호제법을 이용해 최대공약수를 구하는 로직 (while문 사용)
function gcd(a, b) {
  while (b !== 0) {
    let r = a % b;
    a = b;
    b = r;
  }
  return a;
}

// 유클리드 호제법을 이용해 최대공약수를 구하는 로직 (삼항연산자 사용)
// 위와 같은 결과 로직
const gcd = (a, b) => {
  return a % b ? gcd(b, a % b) : b;
};

// 유클리드 호제법을 이용해 최소공배수를 구하는 로직
function lcm(a, b) {
  return a * (b / gcd(a, b));
}

console.log(gcd(10, 20));
console.log(lcm(10, 20));
