// 2024.01.02(Tues)

// my way
function solution(my_string, index_list) {
  let result = "";

  for (let el of index_list) {
    result += my_string[el];
  }

  return result;
}

// other way 1
function solution(my_string, index_list) {
  return index_list.map((el) => my_string[el]).join("");
}

// other way 2
function solution(my_string, index_list) {
  let result = "";

  index_list.forEach((idx) => {
    result += my_string[idx];
  });

  return result;
}

console.log(
  solution("cvsgiorszzzmrpaqpe", [16, 6, 5, 3, 12, 14, 11, 11, 17, 12, 7])
); // "programmers"
console.log(solution("zpiaz", [1, 2, 0, 0, 3])); // "pizza"
