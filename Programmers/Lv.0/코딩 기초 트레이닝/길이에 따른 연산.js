// 2023.12.03(Sun)

// my way
function solution(num_list) {
  if (num_list.length >= 11) {
    return num_list.reduce((acc, cur) => acc + cur);
  } else {
    return num_list.reduce((acc, cur) => acc * cur);
  }
}

// other way
function solution(num_list) {
  return num_list.reduce((acc, cur) =>
    num_list.length >= 11 ? acc + cur : acc * cur
  );
}

// if문 대신 삼항조건으로, 조건문을 reduce 안에서 돌리니까 더 간단!

console.log(solution([3, 4, 5, 2, 5, 4, 6, 7, 3, 7, 2, 2, 1])); // 51
console.log(solution([2, 3, 4, 5])); // 120
