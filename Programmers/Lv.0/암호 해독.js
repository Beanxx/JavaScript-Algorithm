// 2022.10.21(Fri)

// my way
function solution(cipher, code) {
  let answer = "";
  for (let i = 0; i < cipher.length; i++) {
    // index0 -> 1번째이므로 i+1으로 비교해야 함
    if ((i + 1) % code === 0) {
      answer += cipher[i];
    }
  }
  return answer;
}

// other way
function solution(cipher, code) {
  return cipher
    .split("")
    .filter((v, i) => (i + 1) % code === 0)
    .join("");
}

// filter 내에서 저 첫번째 인자는 어떤 용도일까나.. 저걸 빼면 빈 문자열이 출력이 된댜.. 머지
