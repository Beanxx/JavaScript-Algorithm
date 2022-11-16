// 복습완료💫(221116)
// 2022.10.10(Mon)

function solution(array) {
  let result = [];
  let obj = {};

  // 객체 안에다가 각 수에 대한 빈도수 저장
  for (let el of array) {
    // 객체 내에 해당 수가 없으면 값이 1인 key를 새로 할당
    if (!obj[el]) obj[el] = 1;
    // 객체 내에 해당 수가 이미 있으면 값 +1
    else obj[el]++;
  }
  // obj: { '1': 1, '2': 1, '3': 3, '4': 1 }

  // 가장 많은 등장 횟수 즉, 객체 내 value가 가장 큰 값
  // Object.values(obj):[ 1, 1, 3, 1 ]
  const maxValue = Math.max(...Object.values(obj)); // 3

  // 가장 많이 등장한 횟수를 가진 객체 내 key를 result에 넣기
  for (let el in obj) {
    if (obj[el] === maxValue) result.push(Number(el)); // 3
  }
  // result: [3]

  // result 길이가 1인 즉, 중복되는 최빈값이 없는 경우 -> result 원소 그대로 리턴
  // 길이가 1이 아닌 경우 즉, 중복되는 최빈값이 존재하는 경우 -> -1 result
  return result.length === 1 ? result[0] : -1;
}

// Lv.0 문제인데 생각보다 나에겐 어려웠다.. 최빈값이 여러개일 경우 처리를 하는 방법을 생각해내는게 퍼뜩 생각이 안났음ㅜ

console.log(solution([1, 2, 3, 3, 3, 4])); // 3
