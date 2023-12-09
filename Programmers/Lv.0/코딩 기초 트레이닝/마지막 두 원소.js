// 2023.12.10(Sun)

// my way
function solution(num_list) {
  let lastNum = num_list[num_list.length - 1];
  let lastFrontNum = num_list[num_list.length - 2];
  let lastResultNum = 0;

  if (lastNum > lastFrontNum) {
    lastResultNum = lastNum - lastFrontNum;
  } else {
    lastResultNum = lastNum * 2;
  }

  return [...num_list].concat(lastResultNum);
}

// other way
function solution(num_list) {
  const [a, b] = [...num_list].reverse();

  return [...num_list, a > b ? a - b : a * 2];
}

// 내 코드는 좀 난잡한 느낌이 있는데 배열을 뒤집어서 필요한 값을 바로 a, b에 할당하니까 so simple,,

console.log(solution([2, 1, 6])); // [2, 1, 6, 5]
console.log(solution([5, 2, 1, 7, 5])); // [5, 2, 1, 7, 5, 10]
