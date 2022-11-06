// 복습완료💫(221106)
// 2022.10.25(Tues)

// my way
function solution(my_string) {
  return my_string.toLowerCase().split("").sort().join("");
}
// sort() 메소드는 배열에서 사용가능하므로 사용전 문자열을 split('')으로 배열로 만든 후 사용하기

// other way
function solution(my_string) {
  return [...my_string.toLowerCase()].sort().join("");
}

// split('')과 [...str] 는 똑같이 각 원소로 쪼개어 배열로 만들어 주는 역할을 한다.
