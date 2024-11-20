// 복습완료💫(221106)
// 2022.10.21(Fri)

// my way
function solution(cipher, code) {
  let answer = "";
  for (let i = 0; i < cipher.length; i++) {
    // index 0 -> 1번째이므로 i+1으로 비교해야 함
    if ((i + 1) % code === 0) {
      answer += cipher[i];
    }
  }
  return answer;
}

// 241120
function solution(cipher, code) {
  return [...cipher].filter((_, idx) => (idx + 1) % code === 0).join("");
}

// filter((el, i) => ~) 에서 2번째 인자 i는 index를 의미!

console.log(solution("dfjardstddetckdaccccdegk", 4)); // 'attack'
