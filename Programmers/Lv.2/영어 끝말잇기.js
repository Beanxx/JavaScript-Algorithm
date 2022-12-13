// // 2022.12.04(Sun)
// 영어 끝말잇기.js

function solution(n, words) {
  let arr = [words[0]]; // 끝말잇기 통과한 단어 배열에 저장하기

  // word[i-1] 처리시 i가 0부터 시작하면 error가 나므로 arr에 먼저 words[0] 값을 담아놓고 i는 1부터 시작해주기s
  for (let i = 1; i < words.length; i++) {
    // 이전 단어의 마지막 글자와 현재 단어의 첫 글자가 일치하지 않거나
    // 통과한 단어의 배열인 arr에 현재 단어가 이미 있을 경우 Return
    if (
      words[i - 1][words[i - 1].length - 1] !== words[i][0] ||
      arr.includes(words[i])
    ) {
      return [(i % n) + 1, parseInt(i / n) + 1];
    } else {
      // 위의 조건이 아닐 경우엔 arr에 push
      arr.push(words[i]);
    }
  }
  return [0, 0]; // 반복문 순회가 끝났음에도 반환할 값이 없다면 [0, 0] return
}

console.log(
  solution(3, [
    "tank",
    "kick",
    "know",
    "wheel",
    "land",
    "dream",
    "mother",
    "robot",
    "tank",
  ])
); // [3, 3]
