// 2024.04.10(Wed)

// my way

// first try
function solution(my_string) {
  let str = my_string;
  let result = [];

  for (let i = 0; i < my_string.length; i++) {
    result.push(str);
    str = str.slice(1);
  }

  return result.sort();
}

// second try
function solution(my_string) {
  let result = [];

  for (let i = 0; i < my_string.length; i++) {
    result.push(my_string.slice(i));
  }

  return result.sort();
}
// 첫번째 시도와 달라진 점이 있다면 my_string을 바로 push해주었다는 점..? 조금 코드를 줄일 수 있음

// -------------------------------------------

// other way 1
function solution(my_string) {
  let result = [];

  for (let i = 0; i < my_string.length; i++) {
    result.push(my_string.substring(i));
  }

  return result.sort();
}
// slice() 대신 substring()을 쓰는 방법도 있다

// other way 2
function solution(my_string) {
  return Array.from(my_string)
    .map((_, i) => my_string.substring(i))
    .sort();
}
// Array.from(my_string): 'banana' -> [ 'b', 'a', 'n', 'a', 'n', 'a' ]
// substring(idx): idx부터 마지막 idx까지의 문자열 리턴

console.log(solution("banana")); // ["a", "ana", "anana", "banana", "na", "nana"]
