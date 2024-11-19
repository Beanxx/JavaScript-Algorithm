// 241119 다시 풀어야 하는 이유 : 정수 판별 메서드 사용 방법을 검색해서 품
// 복습완료💫(221106)
// 2022.10.25(Tues)

// my way
function solution(n) {
  if (Math.sqrt(n) === parseInt(Math.sqrt(n))) return 1;
  else return 2;

  // return Math.sqrt(n) === parseInt(Math.sqrt(n)) ? 1 : 2
}
// 간단한 if문은 삼항연산자를 쓰도록 노력해보자아

// 241119
function solution(n) {
  return Number.isInteger(Math.sqrt(n)) ? 1 : 2;
}

// Number.isInteger(n): 숫자 n이 정수인지 판별 (쓰는 방법 검색하지 않고 알아야 해,,)
