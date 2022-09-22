// 2022.09.23(Fri)
// 2021 카카오 채용연계형 인턴십
// Lv.1_숫자 문자열과 영단어.js

// my way
function solution(s) {
  const data = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  // 문자열 -> 숫자로 변환할 때 사용하는 변수
  let str = "";
  let result = "";

  for (let el of s) {
    // 숫자가 아닐 때
    if (isNaN(el)) {
      str += el; // str = oneseveneight
      if (data.includes(str)) {
        // console.log(str); // str = one
        // console.log(data.indexOf(str)) // 1
        str = data.indexOf(str); // str = 1
        result += str; // result = 1
        str = ""; // 새로운 문자열에 대해서 판단해야하므로 result에 str 값을 넣어주고나서 초기화해주기
      }
    } else {
      // 숫자일 때
      result += el;
    }
  }
  return Number(result);
}

// --------------------------------------------------------------------

// other way
function solution(s) {
  let data = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  let result = s;

  for (let i = 0; i < data.length; i++) {
    // result = "one4seveneight"
    let arr = result.split(data[i]); // data[1] = 'one'
    // arr = [ '', '4seveneight' ]
    result = arr.join(i); // i = 1
    // 1로 '', '4seveneight'를 연결 -> result = '14seveneight'
    // 위와 같은 방식으로 seven, eight도 반복 수행
  }

  return Number(result);
}

console.log(solution("one4seveneight")); // 1478
console.log(solution("23four5six7")); // 234567
console.log(solution("2three45sixseven")); // 234567
console.log(solution("123")); // 123

// 구현 방법을 생각하는게 좀 어려웠는데 풀고 나니까 딸랑 +1점이라니,, ㅎ
// split(), join()으로 간결하게 풀 수 있음! 어떻게 이렇게 풀 생각을 할까나 짝짝~
