// first try - 2022.05.10(Tues)
// second try - 2022.06.30(Thurs)

// Q: 문자열을 입력받아 문자열에서 가장 긴 단어를 리턴해야 합니다.

// * 주의 *
// 단어는 공백 한 칸으로 구분
// 가장 긴 단어가 2개 이상이면 첫번째로 등장하는 단어를 리턴해야 함.

// ex. 'I love coding'
function getLongestWord(str) {
  // ['I', 'love' 'coding']
  let arr = str.split(" ");

  // 배열의 첫번째 요소를 초기값으로
  let result = arr[0];

  // for ~ of문은 배열 반복에서 사용
  for (let word of arr) {
    // 배열 첫번째 요소와 배열 요소들의 길이를 비교해서 첫번째 요소보다 크면 result 값 변경
    if (result.length < word.length) {
      result = word;
    }
  }
  return result;
}
