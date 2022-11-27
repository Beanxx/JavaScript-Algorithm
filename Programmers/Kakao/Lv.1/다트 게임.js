// 2022.11.27(Sun)
// 2018 KAKAO BLIND RECRUITMENT
// Lv.1_[1차] 다트 게임.js

function solution(dartResult) {
  let arr = [];
  let temp = "";

  for (let el of dartResult) {
    // 숫자이면 temp에 더하기 => 연속으로 숫자가 나오는 경우 즉, 두 자리 이상의 수일 경우 처리
    if (!isNaN(el)) {
      temp += el;
    } else if (el === "S") {
      arr.push((+temp) ** 1);
      temp = ""; // 문자가 나온 후에는 숫자를 저장해놓는 임시 변수 초기화해주기
    } else if (el === "D") {
      arr.push((+temp) ** 2);
      temp = "";
    } else if (el === "T") {
      arr.push((+temp) ** 3);
      temp = "";
    } else if (el === "*") {
      arr[arr.length - 1] *= 2; // arr 배열의 마지막 원소에 *2
      arr[arr.length - 2] *= 2; // arr 배열의 마지막에서 2번째 원소에 *2
    } else if (el === "#") {
      arr[arr.length - 1] *= -1; // arr 배열의 마지막 원소에 *-1
    }
  }
  //arr: [ 1, -2, 10 ]
  return arr.reduce((acc, cur) => acc + cur, 0); // 원소들 모두 더해주기
}

console.log(solution("1D2S#10S")); // 9
console.log(solution("1S2D*3T")); // 37
