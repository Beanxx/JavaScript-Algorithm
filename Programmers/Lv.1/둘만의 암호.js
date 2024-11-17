// 2024.11.17(Sun)

// my way
function solution(s, skip, index) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const skipArr = skip.split(""); // [ 'w', 'b', 'q', 'd' ]

  const skipAlphabet = alphabet.split("").filter((el) => !skipArr.includes(el)); // skip 문자열 제외한 알파벳

  const result = s.split("").map((el) => {
    const currentIdx = skipAlphabet.indexOf(el);
    const newIdx = (currentIdx + index) % skipAlphabet.length; // length로 나누면 z가 넘어갈 경우에도 앞으로 돌아가서 처리한다

    return skipAlphabet[newIdx];
  });

  return result.join("");
}

console.log(solution("aukks", "wbqd", 5)); // "happy"
