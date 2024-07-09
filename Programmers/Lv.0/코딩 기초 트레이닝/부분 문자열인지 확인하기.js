// 2024.07.09(Tues)

// my way
function solution(my_string, target) {
  return my_string.includes(target) ? 1 : 0;
}

// other way
function solution(my_string, target) {
  // indexOf()로 구한 index가 존재하여 -1이 아닌 index 값이 반환될 경우의 조건에 +를 붙여 true -> 1 | false -> 0 로 나타나도록 할 수 있다
  return +(my_string.indexOf(target) > -1);
}

console.log(solution("banana", "ana"));
console.log(solution("banana", "wxyz"));
