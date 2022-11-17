// 복습완료💫(221117)
// 2022.07.06(Wed)
// 문자열 내림차순으로 배치하기.js

function solution(s) {
  return [...s].sort().reverse().join("");
}
// 그냥 sort() 사용시 대문자부터 정렬 후, 소문자 정렬 (오름차순)
// [...s].sort() = ['Z', 'b', 'c', 'd', 'e', 'f', 'g']
// 내림차순으로 정렬해야하며 대문자가 더 뒤에 정렬되어야 하므로 sort()로 정렬 후, reverse()로 뒤집으면 된다!
// 정수 내림차순으로 배치하기 문제보다 한 단계 줄어든 과정으로 생각하면 된다!

console.log(solution("Zbcdefg")); // "gfedcbZ"
