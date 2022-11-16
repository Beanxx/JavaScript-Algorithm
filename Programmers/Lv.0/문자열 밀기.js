// 복습완료💫(221116)
// 2022.10.31(Mon)

// my way
function solution(A, B) {
  // A = 'hello'
  A = [...A]; // [ 'h', 'e', 'l', 'l', 'o' ]
  let answer = 0; // 밀어야 하는 횟수
  let temp = ""; // 값을 임시 저장해놓을 변수

  for (let el of A) {
    if (A.join("") === B) return answer;
    temp = A.pop(); // 맨 뒤 문자
    A.unshift(temp); // 맨 뒤 문자를 맨 앞으로 삽입
    answer++;
  }
  return -1;
}

// other way
function solution(A, B) {
  if (A === B) return 0; // 애초에 A와 B가 같을 경우 안 밀어도 되므로 0 반환
  for (let i = 1; i < A.length; i++) {
    A = A.slice(-1) + A.slice(0, -1); // 마지막 문자 + 마지막 문자를 제외한 문자열
    if (A === B) return i;
  }
  return -1;
}

console.log(solution("hello", "ohell")); // 1
