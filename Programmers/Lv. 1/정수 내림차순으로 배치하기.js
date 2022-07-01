// 2022.07.10(Fri)
// 정수 내림차순으로 배치하기.js

// ex. n = 118372

// my way
function solution(n) {
  let strN = String(n); // '118372'
  let arrN = strN.split(""); // ['1', '1', '8', '3', '7', '2']
  let sortN = arrN.sort((a, b) => b - a); // 내림차순 정렬 -> ['8', '7', '3', '2', '1', '1']
  let result = "";
  for (el of sortN) {
    result += String(el); // 배열 내 각 요소를 문자열로 더해줌 -> '873211'
  }
  return Number(result); // 문자열을 숫자로 형변환 -> 873211
}

// 풀면서도 너무 변수 선언을 많이 하고 있는 느낌을 받았다. 과연 이게 맞나..? 싶었음

// -------------------------------------------------

// other way
function solution(n) {
  const newN = n + ""; // 숫자를 문자열로
  const newArr = newN
    .split("") // 각 숫자를 쪼개서 배열 형태로
    .sort() // 오름차순 정렬
    .reverse() // 오름차순 정렬를 반대로 -> 내림차순 정렬
    .join(""); // 배열 형태를 문자열로 합치기
  // ['8', '7', '3', '2', '1', '1'] -> '873211'

  return +newArr; // +를 붙여서 문자열을 숫자로 형변환
}

// 메소드를 한번에 연결해서 쓰는 방법 메모..
// join('') 썼으면 더 간단하게 문자열로 합치기 가능했을텐데 생각지도 못했다:(
