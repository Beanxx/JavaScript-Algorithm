// 2024.02.27(Tues)

// my way
function solution(myString) {
  let result = "";

  for (let el of myString) {
    if (el.charCodeAt(0) < "l".charCodeAt(0)) {
      result += "l";
    } else {
      result += el;
    }
  }

  return result;
}

// other way
function solution(myString) {
  return myString.replace(/[a-k]/g, "l");
}

// 정규식을 사용해서 l 이전의 알파벳 범위인 a ~ k 의 모든 알파벳을 l로 바꾸는 방법으로 구현하면 한 줄로 구현 가능!a

console.log(solution("abcdevwxyz")); //	"lllllvwxyz"
console.log(solution("jjnnllkkmm")); //	"llnnllllmm"
