// 복습완료💫(221116)
// 2022.10.30(Sun)

function solution(babbling) {
  // 발음할 수 있는 단어들이 포함되는지
  const regexp1 = /(aya|ye|woo|ma)/;

  // 발음할 수 있는 단어들로 문자열이 시작 or 끝나는지
  const regexp2 = /^(aya|ye|woo|ma)+$/;

  // 두가지 검사를 모두 통과하면 +1 증가
  return babbling.reduce(
    (acc, cur) => (regexp1.test(cur) && regexp2.test(cur) ? ++acc : acc),
    0
  );
}

// ^문자열: 특정 문자열로 시작
// 문자열$: 특정 문자열로 끝남

// 이 문제는 내 힘으로 풀지 못했다,, 한 문자열에 말할 수 있는 문자열이 두 개 이상 포함될 경우를 처리하는게 어려웠음..
// 역시나 정규표현식을 사용하면 간결하게 구현 가능! 'o'

console.log(solution(["ayaye", "uuuma", "ye", "yemawoo", "ayaa"])); // 3
