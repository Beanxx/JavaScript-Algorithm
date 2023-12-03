// 2023.12.03(Sun)

// my way
function solution(num_list, n) {
  let numN = num_list.filter((el) => el === n).length;

  return numN ? 1 : 0;
}

// other way
function solution(num_list, n) {
  return +num_list.includes(n);
}

// includes()의 반환값은 true/false이니까 boolean값을 Number 타입으로 변환하면
// true -> 1, false -> 0을 반환하므로 원하는 결과값을 얻을 수 있는 so simple한 풀이!

console.log(solution([1, 2, 3, 4, 5], 3)); // 1
console.log(solution([15, 98, 23, 2, 15], 20)); // 0

// 취업 후 한동안 알고리즘 및 코테 문제를 너무 안 풀었어서 Lv.0부터 다시 감 익히기!
// 이젠 어떻게 깔끔하고 효율적인 코드를 짜야 하는지에 초점 맞춰서 문제 풀기!-!
