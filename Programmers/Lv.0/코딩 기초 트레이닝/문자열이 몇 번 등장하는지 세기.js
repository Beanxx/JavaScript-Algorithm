// 24.06.26(Wed)

// my way
function solution(myString, pat) {
  let cnt = 0;

  for (let i = 0; i < myString.length; i++) {
    const cuttingStr = myString.slice(i, i + pat.length);

    if (pat === cuttingStr) {
      cnt++;
    }
  }

  return cnt;
}

// other way
function solution(myString, pat) {
  const reg = new RegExp(`(?=${pat})`, "g"); // e.g. /(?=ana)/g
  return myString.match(reg)?.length || 0;
}

// (?=ana) : 긍정형 전방 탐색 -> 패턴 'ana'가 뒤따라오는 위치를 찾음

console.log(solution("banana", "ana")); // 2 d
console.log(solution("aaaa", "a")); // 3
