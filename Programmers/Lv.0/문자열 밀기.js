// 2022.10.31(Mon)

// my way
function solution(A, B) {
  A = [...A];
  let answer = 0;
  let temp = "";

  for (let i = 0; i < A.length; i++) {
    if (A.join("") === B) {
      return answer;
    }
    temp = A.pop();
    A.unshift(temp);
    answer++;
  }

  return -1;
}

// other way
function solution(A, B) {
  if (A === B) return 0;
  for (let i = 0; i < A.length; i++) {
    A = A.slice(-1) + A.slice(0, -1); // 마지막 문자 + 마지막 문자를 제외한 문자열
    if (A === B) return i + 1;
  }
  return -1;
}
