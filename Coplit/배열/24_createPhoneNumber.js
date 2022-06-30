// first try - 2022.05.10(Tues)
// second try - 2022.06.30(Thurs)

// Q: 0-9 사이의 정수를 요소로 갖는 배열을 입력받아 전화번호 형식의 문자열을 리턴해야 합니다.

// * 주의 *
// 반복문(for, while) 사용 금지
// 배열의 길이가 8인 경우, 앞에 [0, 1, 0]이 있다고 가정

// my way
function createPhoneNumber(arr) {
  if (arr.length === 11) {
    return `(${arr.slice(0, 3).join("")})${arr.slice(3, 7).join("")}-${arr
      .slice(7, 11)
      .join("")}`;
  }

  if (arr.length === 8) {
    return `(010)${arr.slice(0, 4).join("")}-${arr.slice(4, 8).join("")}`;
  }
}

// 첨엔 join('')을 안 써줘서 리턴값으로 (0,1,0)-4,2,3,5-3,5,6,7 처럼 각 숫자마다 쉼표(,)가 붙어서 출력됐다.
// slice() 해준 결과에 join('')을 붙여서 각 숫자들이 붙여서 출력되도록 해주어야 함!

// -------------------------------------

// other way
function createPhoneNumber(arr) {
  let head = "(010)";
  let len = arr.length;
  const body = arr.slice(len - 8, len - 4).join(""); // 길이8: slice(0,4), 길이11: slice(3,7)
  const tail = arr.slice(len - 4, len).join(""); // 길이8: slice(4,8), 길이11: slice(7, 11)

  if (len === 11) {
    // arr 배열 길이가 11이라면
    head = `(${arr.slice(0, 3).join("")})`; // index 0,1,2번째 숫자를 head에 할당
  }

  return `${head}${body}-${tail}`;
}

// reference code에선 '-'를 기준으로 head, body, tail를 각각 변수로 선언해서 코드가 한줄에 쭉 나열되어 읽기 힘든 문제 해결!
