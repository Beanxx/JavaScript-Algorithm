// 2024.03.21(Thurs)

// my way
function solution(num_list) {
  let result = 0;

  for (let i = 0; i < num_list.length; i++) {
    let el = num_list[i];

    while (el !== 1) {
      if (el % 2 === 0) el /= 2;
      else el = (el - 1) / 2;

      result++;
    }
  }

  return result;
}

// -------------------------------------------

// other way
function solution(num_list) {
  return num_list
    .map((v) => v.toString(2).length - 1)
    .reduce((acc, cur) => acc + cur);
}
// 진수로 변환해서 하는 방법인데 정확히 이해를 못해서 머리 잘 돌아갈 때 각 잡고 이해 필요,,

console.log(solution([12, 4, 15, 1, 14])); // 11
