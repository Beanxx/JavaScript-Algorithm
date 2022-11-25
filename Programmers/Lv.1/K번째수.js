// 2022.11.25(Fri)
// 정렬 > K번째수.js

// my way
function solution(array, commands) {
  let answer = [];
  let newArray = []; // 배열을 자른 후 정렬해놓은 원소들을 담아놓는 배열

  for (let i = 0; i < commands.length; i++) {
    // 배열 숫자를 자르고 오름차순 정렬
    newArray = array
      .slice(commands[i][0] - 1, commands[i][1])
      .sort((a, b) => a - b);

    // command 배열 내 각 배열의 원소 3번째에 위치한 newArray 원소를 answer에 push!
    answer.push(newArray[commands[i][2] - 1]);
  }
  return answer;
}

// other way
function solution(array, commands) {
  let answer = [];

  // 배열 내 숫자를 자르고 정렬하고 뽑아내는 과정을 한번에!
  answer = commands.map((a) => {
    return array.slice(a[0] - 1, a[1]).sort((b, c) => b - c)[a[2] - 1];
  });
  return answer;
}

console.log(
  solution(
    [1, 5, 2, 6, 3, 7, 4],
    [
      [2, 5, 3],
      [4, 4, 1],
      [1, 7, 3],
    ]
  )
); // [5, 6, 3]
