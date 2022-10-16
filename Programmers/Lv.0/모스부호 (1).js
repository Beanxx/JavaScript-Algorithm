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

  letter = letter.split(" ");

  let result = "";

  for (let i = 0; i < letter.length; i++) {
    for (let j = 0; j < Object.keys(morse).length; j++) {
      if (letter[i] === Object.keys(morse)[j]) {
        result += Object.values(morse)[j];
      }
    }
  }

  return result;
}

// other way
return letter.split(" ").reduce((prev, cur) => prev + morse[cur], "");
