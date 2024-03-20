// 2024.03.20(Wed)

// my way
function solution(myString) {
  return myString
    .split("x")
    .sort()
    .filter((el) => el !== "");
}

// -------------------------------------------

// other way
function solution(myString) {
  return myString.match(/[^x]+/g).sort();
}

// ^: 부정 의미 => ^x: x가 아닌 문자
// +: [^x]와 하나 이상 일치

console.log(solution("axbxcxdx")); //		["a", "b", "c", "d"]
console.log(solution("dxccxbbbxaaaa")); // 	["aaaa", "bbb", "cc", "d"]
