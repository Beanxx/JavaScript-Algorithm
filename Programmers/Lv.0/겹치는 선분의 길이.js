// 복습완료💫(221116)
// 2022.10.28(Fri)

function solution(lines) {
  let obj = {};
  let result = 0;

  for (let el of lines) {
    let max = Math.max(...el);
    let min = Math.min(...el);
    // lines 배열 내 각 배열에서 최소길이와 최대길이를 구해서 길이에 해당하는 길이에 지나가는 수에 +1씩 해주기
    for (let i = min; i < max; i++) {
      // 이미 존재하는 숫자이면 +1, 존재하지 않는 숫자이면 객체 값을 1로 할당
      obj[i] ? obj[i]++ : (obj[i] = 1);
    }
  }

  // obj: {'0': 1, '1': 2, '2': 2, '3': 3, '4': 3, '5': 2, '6': 2, '7': 2, '8': 2, '9': 1 }

  // value 즉, 길이가 1 초과이면 2번 이상 등장했다는 것이므로 겹친다는 의미 => result +1
  for (let key in obj) {
    obj[key] > 1 && result++;
  }

  return result;
}

// 객체를 이용하여 푸는 방법을 떠올리기가 쉽지 않았다..

console.log(
  solution([
    [0, 5],
    [3, 9],
    [1, 10],
  ])
); // 8
