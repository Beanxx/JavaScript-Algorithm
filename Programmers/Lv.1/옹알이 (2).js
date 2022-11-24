// 2022.11.24(Thurs)
// 옹알이 (2).js

// TestCase 1, 12, 13, 14, 17, 18 FAIL,,
function solution(babbling) {
  let result = 0;
  const regexp1 = /(aya|ye|woo|ma)/;
  const regexp2 = /^(aya|ye|woo|ma)+$/;
  const regexp3 = /(ayaaya|yeye|woowoo|mama)/g;

  result = babbling.filter((el, _) => (regexp3.test(el) ? "" : el)); // 반복옹알이 아닌거 filter
  result = result.filter((el, _) =>
    regexp1.test(el) && regexp2.test(el) ? el : ""
  );

  return result.length;
}

// ------------------------------------------------------------

// PASS CODE
function solution(babbling) {
  let result = 0;
  const single = /(aya|ye|woo|ma)/g; // 그냥 옹알
  const double = /(ayaaya|yeye|woowoo|mama)/g; // 반복 옹알

  for (let el of babbling) {
    // 반복옹알이면 숫자 1로 바꾸고, 그냥 옹알이면 빈문자열로 바꾸기
    el = el.replaceAll(double, "1").replaceAll(single, "");
    // 빈문자열이라는 것은 반복옹알이가 아닌 그냥 옹알이이므로 result +1
    el.length === 0 ? result++ : result;
  }

  return result;
}
// replace(str1, str2)
// replaceAll(pattern(정규표현식), str1)
// 이 문제에서 single, double로 정의한 정규표현식을 사용하여 replace를 쓰던, replaceAll를 쓰던 둘 다 통과되긴 함!
// 그치만 보통 정규 표현식을 쓰는 경우엔 replaceAll를 사용하는듯..?

// ------------------------------------------------------------

// other way
function solution(babbling) {
  // 발음할 수 있는 단어들이 1번 이상 나오는지
  const regexp1 = /(aya|ye|woo|ma)\1+/;

  // 발음할 수 있는 단어들로 문자열이 시작 or 끝나는지
  const regexp2 = /^(aya|ye|woo|ma)+$/;

  // regexp2는 만족하면서, regexp1은 만족하지 않아야 반복옹알이가 아닌 그냥 옹알이인것만 판별 가능
  return babbling.reduce(
    (acc, cur) => (!regexp1.test(cur) && regexp2.test(cur) ? ++acc : acc),
    0
  );
}

console.log(solution(["aya", "yee", "u"])); // 1
console.log(solution(["ayaye", "uuu", "yeye", "yemawoo", "ayaayaa"])); // 2
