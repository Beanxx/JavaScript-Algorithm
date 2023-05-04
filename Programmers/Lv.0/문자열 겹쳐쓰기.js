// 2023.05.04(Thurs)

function solution(my_string, overwrite_string, s) {
  const result =
    my_string.slice(0, s) +
    overwrite_string +
    my_string.slice(s + overwrite_string.length);

  return result;
}

// replace로 문자열을 변경할 경우 테스트 6번이 통과가 되지 않는다.
// replace의 경우 동일한 문자열이 있는 경우 모두 변경하기 때문,,
// 그래서 그냥 slice로 각각 쪼개서 변경할 문자열을 중간에 넣어주는 방법으로 해결쓰
