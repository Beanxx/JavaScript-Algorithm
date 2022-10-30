// 2022.10.30(Sun)

function solution(babbling) {
  // 발음할 수 있는 단어들이 최소 1개 이상 포함되는지
  const regexp1 = /(aya|ye|woo|ma)\1+/;

  // 발음할 수 있는 단어들로 문자열이 시작 or 끝나는지
  const regexp2 = /^(aya|ye|woo|ma)+$/;

  // 두가지 검사를 모두 통과하면 +1
  return babbling.reduce(
    (result, el) => (!regexp1.test(el) && regexp2.test(el) ? ++result : result),
    0
  );
}

// +: 최소 한개
// 문자열$: 특정 문자열로 끝남
// ^문자열: 특정 문자열로 시작

// 이 문제는 내 힘으로 풀지 못했다,, 한 문자열에 말할 수 있는 문자열이 두 개 이상 포함될 경우를 처리하는게 어려웠음..
// 역시나 정규표현식을 사용하면 간결하게 구현 가능! 'o'
