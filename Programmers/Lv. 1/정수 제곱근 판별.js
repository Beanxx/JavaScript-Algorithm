// 2022.07.07(Thurs)
// 정수 제곱근 판별.js

// my way
function solution(n) {
  // n = 121
  let x = Math.sqrt(n); // x = 11
  if (x === parseInt(x)) {
    // x가 정수라고 주어졌기 때문에 그냥 x와 x를 정수로 변환한 값이 같아야 x가 n의 정수 제곱근!
    return (x + 1) ** 2; // x+1의 제곱
  } else {
    return -1;
  }
}

// other way
function solution(n) {
  return Math.sqrt(n) === parseInt(Math.sqrt(n)) ? (Math.sqrt(n) + 1) ** 2 : -1;
}

// 다른 사람의 풀이 중에 내가 if문으로 쓴 코드를 거의 비슷하게 삼항 연산자로 1줄에 해결한 코드가 있었다! 굳굳~
