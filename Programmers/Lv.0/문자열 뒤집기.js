// 2022.10.13(Thurs)

function solution(my_string) {
  return (answer = my_string.split("").reverse().join(""));
}

// reverse() 메소드는 배열에서 적용이 되는 메소드
// reverse() 메소드를 문자열에 적용하려면 split('')로 문자열을 쪼개서 배열로 만든 다음에 reverse() 적용하구
// 다시 join('')으로 배열을 문자열로 합쳐주는 방식으로 하면 된다!!
