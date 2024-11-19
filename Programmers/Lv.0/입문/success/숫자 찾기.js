// 복습완료💫(221116)
// 2022.10.24(Mon)

// my way
function solution(num, k) {
  num = [...String(num)].map((el) => Number(el)); // [ 2, 3, 2, 4, 4, 3 ]
  let answer = num.indexOf(k) + 1; // index 구하기
  // answer가 0이라는 것은 indexOf(k) 결과가 -1이므로 존재하지 않음을 의미
  return answer !== 0 ? answer : -1;
}

// 241119
function solution(num, k) {
  const idx = String(num).indexOf(k);
  return idx !== -1 ? idx + 1 : idx;
}

// refactor
function solution(num, k) {
  return String(num).indexOf(k) + 1 || -1;
}
// index가 존재하지 않으면 -1 인데 +1 = 0 => 0은 falsy 값이므로 0이면 -1 출력하도록,

// other way
function solution(num, k) {
  return [...String(num)].map(Number).indexOf(k) + 1 || -1;
}
// 내가 푼 방법과 유사하지만 한 줄에 구현 ~!
// Number(el)).indexOf(k) + 1 결과가 0이면 false로 or연산자 뒤에 값을 반환

console.log(solution(232443, 4)); //4
