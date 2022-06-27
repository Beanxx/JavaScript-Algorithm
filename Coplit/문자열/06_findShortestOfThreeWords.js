// first try - 2022.04.27(Wed)
// second try - 2022.06.27(Mon)

// Q: 차례대로 문자열 3개를 입력받아, 가장 짧은 문자열을 리턴해야 합니다.

// my way
function findShortestOfThreeWords(word1, word2, word3) {
  if (word1.length === word2.length || word1.length === word3.length) {
    return word1;
  }
  if (word2.length === word3.length) {
    return word2;
  }

  if (word1.length < word2.length) {
    if (word2.length < word3.length || word3.length > word1.length) {
      return word1;
    } else {
      return word3;
    }
  } else {
    // word1.length > word2.length
    if (word2.length > word3.length) {
      return word3;
    } else {
      return word2;
    }
  }
}

// 도대체 if문을 몇 번 쓴거니.. 코드 넘 더럽;

// ---------------------------------------------------------------------------

// reference
// 임의로 가장 짧은 문자열로 word1를 초기값으로 할당해주고 시작!
// 위에서 짠 코드보다 훨씬 깔꼼하다 ٩( ᐛ )و
function findShortestOfThreeWords(word1, word2, word3) {
  let shortWord = word1;

  if (word1.length > word2.length) {
    // word1 > word2 일 때
    shortWord = word2; // shortWord를 word1 -> word2로 교체
    if (word2.length > word3.length) {
      // word1 > word2 > word3가 되므로 가장 짧은 길이는 word3
      shortWord = word3; // word2 -> word3로 교체
    }
  } else {
    // word1 < word2 일 때
    if (word1.length > word3.length) {
      // word3 < word1 < word2 이므로
      shortWord = word3; // 가장 짧은 길이는 word3
    }
  }
  return shortWord;
}
