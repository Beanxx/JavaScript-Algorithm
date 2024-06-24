// 2024.06.24(Mon)

// my way
function solution(myString, pat) {
  const idx = myString.lastIndexOf(pat) + pat.length;
  return myString.slice(0, idx);
}

// string.lastIndexOf(search): 문자열 맨 뒤부터 검색
// 만약 search 문자열이 2글자 이상일 경우 첫번째 글자 idx를 return한다
// 그러므로 + search.length + 1 를 해야 해당 idx까지의 문자열을 리턴할 수 있다
// slice(0, idx+1): 이 경우에 처음부터 idx까지의 문자열을 자르므로 idx+1을 해야 하지만 const idx 부분에서 -1를 했으므로 +1/-1를 없애기 samesame

// other way
function solution(myString, pat) {
  myString.substring(0, str.lastIndexOf(pat)) + pat;
}

// substring(0, idx+1): 0~idx 까지의 문자열 자르기

console.log(solution("AbCdEFG", "dE")); // "AbCdE"
console.log(solution("AAAAaaaa", "a")); // "AAAAaaaa"
