// 241119 다시 풀어야 하는 이유: reverse()는 문자열이 아닌 배열에서 사용한다는 사실을 인지하지 못하고 문자열에 바로 reverse()를 적용해서 풀려고 함
// 복습완료💫(221106)
// 2022.10.13(Thurs)

function solution(my_string) {
  return [...my_string].reverse().join("");
  // return my_string.split("").reverse().join("");
}

// reverse() 메소드는 배열에서 적용이 되는 메소드!
// reverse() 메소드를 문자열에 적용하려면 spread 연산자나 split('')로 문자열을 쪼개서 배열로 만든 다음에 reverse() 적용하구
// 다시 join('')으로 배열을 문자열로 합쳐주는 방식으로 하면 된다!!

// 241119 또 reverse()를 문자열에서 적용했다.. reverse()는 배열에서 적용 가능!! 즉, 문자열을 배열로 변환 후 reverse() 메서드 사용하기!
