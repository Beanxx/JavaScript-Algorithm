// 2022.10.25(Tues)

// my way
function solution(my_string) {
  return my_string.toLowerCase().split("").sort().join("");
}

// other way
function solution(my_string) {
  return [...my_string.toLowerCase()].sort().join("");
}
