// 복습완료💫(221116)
// 2022.10.16(Sun)

function solution(letter) {
  const morse = {
    ".-": "a",
    "-...": "b",
    "-.-.": "c",
    "-..": "d",
    ".": "e",
    "..-.": "f",
    "--.": "g",
    "....": "h",
    "..": "i",
    ".---": "j",
    "-.-": "k",
    ".-..": "l",
    "--": "m",
    "-.": "n",
    "---": "o",
    ".--.": "p",
    "--.-": "q",
    ".-.": "r",
    "...": "s",
    "-": "t",
    "..-": "u",
    "...-": "v",
    ".--": "w",
    "-..-": "x",
    "-.--": "y",
    "--..": "z",
  };

  let result = "";
  letter = letter.split(" "); // ['....', '.', '.-..', '.-..', '---']

  // letter 원소 순회
  for (let i = 0; i < letter.length; i++) {
    // morse 원소 순회
    for (let j = 0; j < Object.keys(morse).length; j++) {
      if (letter[i] === Object.keys(morse)[j]) {
        // key와 일치할 경우 value를 result에 더하기
        result += Object.values(morse)[j];
      }
    }
  }
  return result;
}

// other way
return letter.split(" ").reduce((prev, cur) => prev + morse[cur], "");
// morse[cur]을 통해 letter 원소에 해당하는 값을 key로 넣어서 이에 해당하는 value를 reduce를 통해 더해주면 한 줄에 끄읏-

console.log(solution(".... . .-.. .-.. ---")); // 'hello'
