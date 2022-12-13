// // 2022.12.03(Sat)
// 다음 큰 숫자.js

// my way
function solution(n) {
  let ntwo = n.toString(2); // 1001110  // 10진수 -> 2진수로 변환
  let nLength = [...ntwo].filter((el) => el === "1").length; // 4  // 2진수 값에서 1의 개수
  let nextNum = n; // 다음 큰 숫자

  while (true) {
    nextNum++;
    let nextLength = [...nextNum.toString(2)].filter((el) => el === "1").length;
    if (nLength === nextLength) {
      return nextNum; // 2진수 값의 1의 개수가 같으면 nextNum 반환
    }
  }
}

// other way
function solution(n, a = n + 1) {
  // match(/1/g)를 통해 1과 매치가 되는 것을 뽑아 개수 구하기
  return n.toString(2).match(/1/g).length === a.toString(2).match(/1/g).length
    ? a
    : solution(n, a + 1);
  // 개수가 같으면 다음 큰 숫자인 a를 반환하고, 아닐 경우엔 재귀를 통해 a를 +1 증가시킨 후 함수 반복!
}

console.log(solution(78)); // 83
console.log(solution(15)); // 23
